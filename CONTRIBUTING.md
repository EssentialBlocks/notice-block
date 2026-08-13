# Contributing

Developer setup for Notice Block. `README.md` is generated from `readme.txt`
for WordPress.org, so developer documentation lives here instead.

## Clone

This repository depends on two git submodules:

| Submodule | Path | Needed for |
| --- | --- | --- |
| `style-handler` | `lib/style-handler` | **Runtime.** Ships in the plugin and generates the per-post CSS the frontend depends on. |
| `controls` | `controls` | Build time only. Shared Essential Blocks editor controls. |

Clone with submodules:

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/notice-block.git
cd notice-block
```

Both submodules are private repositories, so this needs an SSH key with access to
the `EssentialBlocks` organisation.

### Already cloned without submodules

```bash
git submodule update --init --recursive
```

Or equivalently, from the plugin directory:

```bash
npm run ensure-submodules
```

## Install and build

```bash
npm ci              # also runs `prepare`, which checks the submodules
npm run build       # production build into dist/
npm start           # watch mode
```

Use npm, not yarn. `package-lock.json` is committed and CI installs with
`npm ci`; there is no `yarn.lock`.

## Why `lib/style-handler` matters

`lib/style-handler/style-handler.php` is loaded by `notice-block.php` at runtime.
Because it comes from a submodule, a plain `git clone` leaves the directory
empty, and nothing downstream complains on its own:

- `npm run build` still succeeds — `dist/` does not depend on the submodule
- `wp dist-archive` still reports `Success` while shipping an empty directory

WordPress is where it surfaces. The plugin guards the load with `file_exists()`,
so a missing file produces an admin notice naming the cause rather than a fatal
error. If you see that notice on a checkout, the submodules are not initialised.

If the file is missing from an actual release, the editor still renders correctly
while the frontend silently loses every generated style — which is why the build
and package steps refuse to run without it.

## Safety gates

`bin/ensure-submodules.js` checks the runtime files, initialises the submodules
when run from a git checkout, and reports clearly when it cannot. It never runs
git from PHP — the check at runtime is a plain `file_exists()` guard.

| Hook | Command | Behaviour when the files are missing and cannot be restored |
| --- | --- | --- |
| `prepare` | `npm install`, `npm ci` | **Warns and continues.** Missing credentials must not block dependency installation. |
| `prebuild` | `npm run build` | **Fails.** |
| `prestart` | `npm start` | **Fails.** |
| `predist` | `npm run dist` | **Fails.** |
| `postdist` | after `npm run dist` | **Fails** if the built zip does not contain the runtime files. `bin/verify-package.js` does not count an empty directory entry as present. |

## Packaging

```bash
npm run dist        # -> ./notice-block.zip, then verifies its contents
```

Run this from a directory named `notice-block`: `wp dist-archive` names the
folder inside the zip after the working directory.

Releases to WordPress.org are handled by `.github/workflows/deploy.yml` on tag
push. That workflow checks out with `submodules: recursive`, so the runtime files
are present before the build runs.

## Branches

`dev` → `latest` → `master`. Open pull requests against `dev`.
