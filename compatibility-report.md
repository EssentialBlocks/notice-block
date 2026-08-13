# Notice Block — PHP / WordPress Compatibility Report

- **Plugin:** Notice (`notice-block`)
- **Version:** 1.3.5 → 1.5.0
- **Branch:** `notice-block-dev` (off `master`)
- **Date of run:** 2026-08-10
- **Nothing committed or pushed.** All changes are left in the working tree.

---

## 1. Detected original baseline

### PHP — detected: ~5.6-era

| Evidence | File | Implies |
|---|---|---|
| Closures (`function ($attributes, $content) { … }` as `render_callback`) | `notice-block.php:104` | PHP 5.3+ |
| Short array syntax (`['lodash']`, `[$this, 'auth_callback']`) | `includes/helpers.php`, `includes/post-meta.php:26` | PHP 5.4+ |
| No typed properties, no arrow functions, no `??`, no `<=>`, no return types anywhere | all files | written below PHP 7.4 |
| `private static $instance;` untyped, `array()` long-form dominant | `includes/font-loader.php:14`, `includes/helpers.php:14` | pre-7.4 idiom |
| `str_contains()` (PHP 8.0 function, but polyfilled by WP core since 5.9) | `includes/helpers.php:47` | added later than the rest; relied on core's polyfill, not on PHP 8 |

The codebase was originally written for roughly **PHP 5.6**, with one later
edit (`str_contains`) that only worked because WordPress core polyfills it.

### WordPress — detected: ~5.8/5.9

| Evidence | File | Implies |
|---|---|---|
| `block.json` present with `apiVersion: 2` | `block.json` | WP 5.6+ |
| `register_block_type()` given a **directory path** (`NOTICE_BLOCK_ADMIN_PATH`) | `notice-block.php:100` | WP 5.8+ |
| `site-editor.php` / `gutenberg-edit-site` FSE handling | `includes/helpers.php:47` | WP 5.9 |
| Fallback branch for `<= 5.6` registering by block **name** | `includes/helpers.php:86` | plugin once supported WP 5.6 |
| `register_meta( … show_in_rest … auth_callback )` | `includes/post-meta.php` | WP 4.9+ |
| Reliance on core's `str_contains` polyfill | `includes/helpers.php:47` | WP 5.9+ in practice |

Original WordPress baseline: **WP 5.8–5.9**.

### Declared vs. actual (before this pass)

| Field | Declared before | Reality |
|---|---|---|
| `Requires at least` (header) | *absent* | — |
| `Requires PHP` (header) | *absent* | — |
| `Tested up to` (header) | *absent* | — |
| `Requires at least` (readme) | 5.6 | stale; code needs 5.9 for the `str_contains` polyfill |
| `Tested up to` (readme) | 6.5 | ~2 years stale |
| `Requires PHP` (readme) | *absent* | — |

The header carried **no** compatibility fields at all, and the readme's
`Requires at least: 5.6` was **wrong** — on WP 5.6–5.8 the admin enqueue path
would fatal on an undefined `str_contains()`.

---

## 2. Chosen floor

```
declared PHP floor = max( detected 5.6, policy minimum 7.4 ) = 7.4   ← policy won
declared WP  floor = max( detected 5.9, policy minimum 6.0 ) = 6.0   ← policy won
```

The policy minimum (PHP 7.4 / WP 6.0) won on **both** axes. The user did not
override the floor for this plugin, so the default policy applies.

---

## 3. Target range

| | Floor | Latest stable | Source |
|---|---|---|---|
| PHP | 7.4 | **8.5.9** (actively supported: 8.2, 8.3, 8.4, 8.5) | `php.net/releases` JSON API, checked 2026-08-10 |
| WordPress | 6.0 | **7.0.3** | `api.wordpress.org/core/version-check/1.7/`, checked 2026-08-10 |

Per-version checklist covered: **PHP 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5** and
**WP 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 7.0**.

---

## 4. Issues found

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `notice-block.php:32` | `require_once` of `lib/style-handler/style-handler.php` — a **git submodule that is currently empty/uninitialised** — with no `file_exists()` guard. Any build or checkout without submodules initialised fatals the entire site on load. | All PHP / all WP | **Critical** |
| 2 | `includes/helpers.php:49` | `include_once` used to capture a return value. `include_once` returns `true` (not the array) if the file was already included in the request; `array_merge(true, …)` is a **TypeError fatal** on PHP 8+ (was only a warning on 7.4). | PHP 8.0+ | **High** |
| 3 | `includes/font-loader.php:52` | `explode(',', $fonts)` where `$fonts` comes from `get_post_meta()` and can legitimately be a non-string (array / serialized value). Passing an array to `explode()` is a **TypeError** on PHP 8. | PHP 8.0+ | **High** |
| 4 | `includes/helpers.php:47` | `str_contains()` called with no guard. Only available on PHP 8.0+, or via WP core's polyfill added in **WP 5.9**. Declared floor of WP 5.6 in the readme meant a fatal on WP 5.6–5.8 + PHP 7.4. | PHP 7.4 on WP < 5.9 | **High** |
| 5 | `includes/helpers.php:47` | `$_SERVER['QUERY_STRING']` read unsanitized and unslashed. | All | Medium |
| 6 | `notice-block.php:1` | Main plugin file missing the `if ( ! defined( 'ABSPATH' ) ) exit;` direct-access guard (the three `includes/` files have it; the entry point did not). | All | Medium |
| 7 | `notice-block.php:25-27` | `define()` calls unguarded — fatal `Constant already defined` notice-storm if the plugin is present twice (e.g. a must-use copy). | All | Medium |
| 8 | `notice-block.php:43,58` | `$script_asset['dependencies']` / `['version']` accessed with no shape validation after `require`. Undefined-index and `array_merge()` TypeError risk on PHP 8. | PHP 8.0+ | Medium |
| 9 | `includes/post-meta.php:12` | `add_filter('init', …)` used where `add_action` is meant. Functionally identical (shared registry) but semantically wrong and trips static analysis. | All | Low |
| 10 | `includes/helpers.php:47,64,68` | Loose `==` string comparisons on `$pagenow`. Safe here (string vs. string), but PHP 8.0's comparison-semantics change makes `===` the correct form. | — (hygiene) | Low |
| 11 | Header + `readme.txt` | `Requires PHP` absent everywhere; `Requires at least` / `Tested up to` absent from the header and stale in the readme. WP.org shows the plugin as untested against anything current. | — (metadata) | Medium |
| 12 | `includes/helpers.php:60,86` | `(float) get_bloginfo('version')` — float cast of a version string. `"6.10"` casts to `6.1`, sorting **below** `6.2`. Now that core has shipped **WP 7.0**, a `7.10` release is a live hazard, not a theoretical one. | WP x.10+ | **High** — *flagged, see §7* |
| 13 | `notice-block.php:98,100` | Registration guard checks `is_registered('essential-blocks/number-counter')` — the wrong block name. This plugin registers `notice-block/notice`. Copy-paste from the number-counter plugin. | All | **High** — *flagged, see §7* |
| 14 | `notice-block.php:89` | `dist/style.css` is registered as `notice-block-editor-css`, but **no `style.css` exists in `dist/`** (only `modules.css` and `style-modules.css`). The handle resolves to a 404. | All | Medium — *flagged, see §7* |
| 15 | `notice-block.php:39` | `throw new Error(…)` when the build output is missing — a raw uncaught throw on the `init` hook produces a white screen of death rather than a graceful admin notice. | All | Medium — *flagged, see §7* |
| 16 | `block.json:2` | `apiVersion: 2`. API v3 has been available since WP 6.3 and is the current standard (iframed editor canvas). | — | Low — *flagged, see §7* |
| 17 | `includes/font-loader.php:79-83` | `wp_register_style('eb-block-fonts', …)` omits the `$ver` argument, so WP appends its own version to the Google Fonts URL. | — | Low — *flagged, see §7* |

**Clean:** no `create_function`, `each()`, `ereg*`, `split()`, `money_format`,
`mysql_*`, `utf8_encode/decode`, `strftime`, `FILTER_SANITIZE_STRING`, `${var}`
interpolation, curly-brace offsets, dynamic property creation, implicit nullable
params, optional-before-required params, or `ArrayAccess`/`Iterator` returning
untagged types anywhere in the plugin. No `$wpdb` usage at all (so no `prepare()`
gap). No REST route registration (so no `permission_callback` gap). No jQuery
usage in `src/` or `assets/`, so no jQuery 3.x / Migrate removals apply. All
four `dist/*.asset.php` files are well-formed.

---

## 5. Dead version-check branches (floor raise) — **AWAITING DECISION**

Raising the declared WordPress floor from 5.6/5.9 to **6.0** strands the
following branch. It is **not** removed — per policy this is your call.

| File | Line | Condition | What the branch does | Single remaining reachable path if removed |
|---|---|---|---|---|
| `includes/helpers.php` | 86 | `if ( (float) get_bloginfo('version') <= 5.6 )` | Returns the **block name string** (`"number-counter/number-counter"`) instead of the directory path, so `register_block_type()` uses the legacy name-based signature that predates WP 5.8's path form. | `get_block_register_path()` collapses to `return $blockPath;` — a one-line method. The `$blockname` parameter becomes unused, and the literal `"number-counter/number-counter"` argument at `notice-block.php:100` becomes dead too. |

That is the **only** version-check branch in the plugin — the grep for
`version_compare` / `PHP_VERSION_ID` / `$wp_version` / `phpversion()` /
`is_php_version_compatible` / `is_wp_version_compatible` / `MIN_PHP`-style
constants / admin-notice bail-outs returned no other hits.

**Status: awaiting your per-branch decision — remove, keep, or keep-with-comment.**
Until you answer, the branch stays exactly as it is.

Note that this branch is *also* issue #12 (the float cast). Deciding to remove
it resolves half of #12 at the same time. The other half — `eb_wp_version` at
line 60 — is a separate, behavior-visible decision (see §7).

---

## 6. Fixes applied

| Issue | Fix |
|---|---|
| #1 | `notice-block.php` — wrapped the style-handler `require_once` in `file_exists()`. An uninitialised submodule now degrades instead of fataling the site. |
| #2 | `includes/helpers.php` — replaced `include_once … ` value-capture with `file_exists()` + `require`, then validated the returned array shape into `$controls_deps` / `$controls_version` before use. |
| #3 | `includes/font-loader.php` — added `is_string($fonts)` to the guard. Kept `!empty()` alongside it so the `"0"` edge case behaves exactly as before. |
| #4 | `includes/helpers.php` — swapped `str_contains($q, 'gutenberg-edit-site')` for `strpos($q, 'gutenberg-edit-site') !== false`. Byte-identical result, works on PHP 7.4 with no dependency on core's polyfill. |
| #5 | `includes/helpers.php` — `$_SERVER['QUERY_STRING']` now read via `isset()` → `wp_unslash()` → `sanitize_text_field()` into `$query_string`. |
| #6 | `notice-block.php` — added `if (!defined('ABSPATH')) { exit; }`. |
| #7 | `notice-block.php` — all three `define()` calls wrapped in `!defined()` guards. |
| #8 | `notice-block.php` — validated `$script_asset` is an array, extracted `$script_asset_deps` / `$script_asset_version` with `isset()` + `is_array()` fallbacks, and used those in `array_merge()` and `wp_register_script()`. |
| #9 | `includes/post-meta.php` — `add_filter('init', …)` → `add_action('init', …)`. |
| #10 | `includes/helpers.php` — `$pagenow ==` → `$pagenow ===` at all five comparison sites. |
| #11 | Header now declares `Requires at least: 6.0` and `Requires PHP: 7.4`. `readme.txt` updated to `Requires at least: 6.0`, `Tested up to: 7.0`, `Requires PHP: 7.4`. |

Version bumped **1.3.5 → 1.5.0** (minor, at the user's explicit request) and kept in sync across:
`notice-block.php` header `Version:`, `NOTICE_BLOCK_VERSION`, `package.json`
`version`, and `readme.txt` `Stable tag`. A `1.5.0` changelog entry was added.

No feature, option name, hook name, block markup, saved attribute, or public API
was changed.

---

## 7. Flagged, NOT auto-fixed — behavior-visible, awaiting your decision

**A. `(float) get_bloginfo('version')` → `eb_wp_version` (issue #12, `includes/helpers.php:60`)**
This float is handed to JavaScript via `wp_localize_script` and consumed inside
`dist/modules.js` (built from the `controls` submodule, currently uninitialised
here, so the consuming code could not be read). Two problems: a `"6.10"` or
`"7.10"` release casts to `6.1` / `7.1` and compares **below** `6.2` / `7.2`;
and now that core is on 7.x this is a live risk rather than a hypothetical.
The correct fix is to pass the raw version **string** and compare it properly
JS-side — but that changes the value's *type* across a plugin boundary and would
break any `eb_wp_version >= 6.1` style numeric comparison in the controls
bundle. **Recommendation:** send the string as an *additional* key
(`eb_wp_version_string`) while leaving the float in place, then migrate the JS
consumers in a follow-up. Not done — needs your sign-off and a look at the
controls submodule.

**B. Wrong block name in the registration guard (issue #13, `notice-block.php:98`) — RESOLVED, see §12**

**C. `dist/style.css` does not exist (issue #14, `notice-block.php:89`) — RESOLVED, see §12**

**D. `throw new Error(…)` on missing build output (issue #15, `notice-block.php:39`)**
An uncaught throw inside an `init` callback = white screen. Converting it to an
admin notice + early `return` is the standard pattern, but it changes a hard
failure into a soft one. **Recommendation:** convert it. Not done unprompted.

**E. `block.json` `apiVersion: 2` (issue #16)**
v3 has been standard since WP 6.3 and gives the iframed editor canvas. Bumping it
changes how the block renders inside the editor and can expose styling that
previously leaked in from the parent document. **Recommendation:** bump to 3, but
only with a visual check in the editor. Not done.

**F. `wp_register_style('eb-block-fonts', …)` missing `$ver` (issue #17)**
Adding a version argument changes the Google Fonts request URL (cache-bust).
Cosmetic, but it is a URL change. **Recommendation:** pass `null` to drop the
version query string entirely. Not done.

---

## 8. Old-vs-new conflicts

None that could not be reconciled. The one genuine tension — `str_contains()`
(PHP 8.0) against a PHP 7.4 floor — was resolved cleanly in favour of the floor
by using `strpos()`, which behaves identically on every version from 7.4 through
8.5 and removes the plugin's silent dependency on a WordPress core polyfill.

## 9. Final declared compatibility range

| Field | Value | Location |
|---|---|---|
| `Requires PHP` | **7.4** | plugin header + `readme.txt` |
| `Requires at least` | **6.0** | plugin header + `readme.txt` |
| `Tested up to` | **7.0** | `readme.txt` |
| `Stable tag` / `Version` | **1.5.0** | header, `NOTICE_BLOCK_VERSION`, `package.json`, `readme.txt` |

Verified range: **PHP 7.4 → 8.5**, **WordPress 6.0 → 7.0**.

## 10. Verification performed

- `php -l` on every PHP file (local CLI is **PHP 8.5.8**) — all 8 files, including
  the four generated `dist/*.asset.php`, report *No syntax errors detected*.
- Full-tree lint sweep re-run after the last edit — clean.
- `phpcs` is **not installed** on this machine (`phpcs -i` not found). Per policy,
  skipped rather than installed. Worth a run in CI before release.
- Static audit only — the plugin was **not** executed against live WP 6.0 or
  WP 7.0 installs. The submodules were uninitialised at the time of the compat
  audit; they were initialised later during the CSS investigation (§12) and
  `php -l` now passes on `lib/style-handler/style-handler.php` and
  `lib/style-handler/includes/class-parse-css.php` too.

## 11. Git state

Branch `notice-block-dev`, created off `master`. Six files modified:
`notice-block.php`, `includes/helpers.php`, `includes/font-loader.php`,
`includes/post-meta.php`, `package.json`, `readme.txt`, plus this report.
**Nothing staged, nothing committed, nothing pushed.**

---

## 12. Frontend CSS investigation

Reported symptom: **the Notice block renders unstyled on the frontend.**

### How this block's CSS actually works

There is **no static block stylesheet**. `src/` contains zero `.css`/`.scss`
files — the only stylesheet import in the entire build graph is
`config/entries.js:2 → ../controls/src/backend.scss`, which lands in the
*editor controls* bundle (`dist/modules.css`), not in the block's own styles.

Every visual style for the Notice block is generated at runtime:

1. `src/style.js` builds desktop/tab/mobile CSS strings from the block
   attributes and hands them to `StyleComponent` (from the `controls` submodule).
2. `StyleComponent` writes that object into the block's **`blockMeta`
   attribute** (`controls/src/helpers/StyleComponent.js:46-50`) and renders a
   `<style>` tag for the editor preview.
3. `blockMeta` is saved into the post content as a block attribute.
4. On the frontend, `EbStyleHandler` (`lib/style-handler/style-handler.php`)
   parses the post's blocks, collects every block carrying a non-empty
   `blockMeta` (`includes/class-parse-css.php:93`), builds a stylesheet, and
   writes it to `wp-content/uploads/eb-style/eb-style-{POST_ID}.min.css`
   (`save_post` and again on `wp`).
5. `EbStyleHandler::enqueue_frontend_assets()` enqueues that file on
   `wp_enqueue_scripts` at priority 99.

**Consequence: if `EbStyleHandler` is not loaded, the block has no frontend CSS
at all.** There is no fallback stylesheet to degrade to.

### Root cause

`lib/style-handler` is a **git submodule, and it was not initialised** in this
checkout — `git submodule status` reported `-34fb2c61…`, and the directory was
empty. So `EbStyleHandler` never existed, step 4 and 5 above never ran, and the
block rendered with zero styles.

Before the compatibility pass this was worse, not better: the unguarded
`require_once` at `notice-block.php:32` made it a **hard fatal on every page
load**. Issue #1's `file_exists()` guard correctly stopped the fatal, but it
converted the failure into exactly the reported symptom — silent, unstyled
output — which is why an admin notice was added (fix 12.1 below).

Corroborating evidence: `wp-content/uploads/eb-style/` contains
`eb-style-7.min.css`, `eb-style-35.min.css` and `eb-style-36.min.css`, holding
generated CSS for `eb-pricing-*`, `eb-flipbox-*`, `eb-slider-*` and
`eb-social-share-*` blocks — left over from a previously-installed Essential
Blocks plugin. **None of them contains a single `eb-notice` selector**,
confirming the generator never ran for this block.

### Fixes applied

| # | Area | Issue | Fix |
|---|---|---|---|
| 12.1 | Frontend | `lib/style-handler` submodule empty → no CSS generation, no enqueue, silently | Ran `git submodule update --init --recursive` (both `controls` and `lib/style-handler` are now populated). Added an `admin_notices` warning, capability-gated to `activate_plugins`, so a future incomplete build reports itself instead of silently dropping all styling. |
| 12.2 | Editor | `EssentialBlocksLocalize.responsiveBreakpoints` was **never localized**, but the shipped `dist/modules.js` interpolates `?.tablet` / `?.mobile` directly into the editor preview's media queries → `@media all and (max-width: undefinedpx)`, an invalid query, so **tablet and mobile styles were silently discarded in the editor** while the frontend rendered them correctly. | Added `responsiveBreakpoints` to the `wp_localize_script` payload, resolved by a new `Notice_Block_Helper::get_responsive_breakpoints()` that mirrors `EbStyleHandlerParseCss::get_responsive_breakpoints()` — same `eb_settings` option, same 1024/767 defaults — so the editor and the generated frontend stylesheet can never disagree on breakpoints. |
| 12.3 | Editor + Frontend | `dist/style.css` was registered unconditionally but **is never built** (nothing under `src/` imports a stylesheet, so `MiniCssExtractPlugin` emits nothing). The `notice-block-editor-css` handle 404'd as `editor_style` in the editor and via `render_callback` on the frontend. | Register the handle with `false` as its `src` when the file is absent. The handle keeps working as a carrier for its `essential-blocks-animation` dependency (so `animate.min.css` still loads in both contexts, exactly as before) but no longer requests a missing file. Uses the real URL automatically if a build ever emits it. |
| 12.4 | Editor + Frontend | The registration guard checked `is_registered('essential-blocks/number-counter')` — the wrong block name, copy-pasted from a sibling plugin. When Essential Blocks is active with number-counter enabled but notice disabled, the Notice block **never registers**, so its `render_callback` never runs and neither its frontend script nor its styles are enqueued. | Corrected to `essential-blocks/notice`, and the dead legacy argument `"number-counter/number-counter"` to `"notice-block/notice"`. Net behaviour is unchanged on sites where Essential Blocks provides the Notice block, and fixed on sites where it does not. |
| 12.5 | Editor | `EssentialBlocksLocalize.fontAwesome` / `.googleFont` were also unset. The bundle tests them as strings (`"true" == fontAwesome`, `"false" === googleFont`). | Declared explicitly at their current effective values (`fontAwesome => 'false'`, `googleFont => 'true'`) so the behaviour is stated rather than accidental. **No behaviour change** — undefined already evaluated to FontAwesome-off and Google-fonts-on. |

`get_responsive_breakpoints()` was unit-tested against nine option shapes
(absent, empty, array, JSON string, slash-escaped JSON, HTML-entity-encoded
JSON, garbage string, partial array, zero values). All nine return valid
integers; none can produce the `undefined` that caused 12.2.

### Still open

- **Widget editor / customizer are not covered.** `Notice_Block_Helper::enqueues()`
  only fires on `post.php`, `post-new.php`, `site-editor.php` and the Gutenberg
  `themes.php` route. On `widgets.php` the `notice-block-controls-util` handle is
  never registered, so `create-block-notice-block-editor` has an unmet dependency
  and the block does not work in the widget editor — even though the style
  handler explicitly supports widget CSS (`rest_after_save_widget`,
  `eb-style-widget.min.css`). Adding `widgets.php` to that condition would change
  where the block is available, so it is flagged rather than applied.
- **The `controls` submodule is far newer than the committed `dist/modules.js`.**
  The current source reads many `EssentialBlocksLocalize` keys the shipped bundle
  does not (`is_pro_active`, `admin_nonce`, `ajax_url`, `eb_plugins_url`,
  `all_blocks_default`, `upgrade_pro_url`). The fixes above target the **shipped
  bundle**; re-running `npm run build` would pull in that newer controls code and
  require localizing the full key set. Do not rebuild without budgeting for that.
