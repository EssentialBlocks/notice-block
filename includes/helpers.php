<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Notice_Block_Helper
{
    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        /**
         * Only for admin add/edit pages/posts
         */
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        if ($pagenow === 'post-new.php' || $pagenow === 'post.php' || $pagenow === 'site-editor.php' || ($pagenow === 'themes.php' && '' !== $query_string && strpos($query_string, 'gutenberg-edit-site') !== false)) {

            $controls_asset_path = NOTICE_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
            $controls_dependencies = file_exists($controls_asset_path) ? require $controls_asset_path : array();
            if (!is_array($controls_dependencies)) {
                $controls_dependencies = array();
            }
            $controls_deps    = isset($controls_dependencies['dependencies']) && is_array($controls_dependencies['dependencies']) ? $controls_dependencies['dependencies'] : array();
            $controls_version = isset($controls_dependencies['version']) ? $controls_dependencies['version'] : NOTICE_BLOCK_VERSION;

            wp_register_script(
                "notice-block-controls-util",
                NOTICE_BLOCK_ADMIN_URL . 'dist/modules.js',
				array_merge($controls_deps, ['lodash']),
                $controls_version,
                true
            );

            wp_localize_script('notice-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                /**
                 * The controls bundle interpolates these straight into the
                 * editor preview's media queries. Without them the editor
                 * emitted `@media all and (max-width: undefinedpx)`, which is
                 * invalid, so tablet and mobile styles were dropped in the
                 * editor while the frontend rendered them correctly.
                 *
                 * Read from the same `eb_settings` option the frontend CSS
                 * generator uses so the two never disagree.
                 */
                'responsiveBreakpoints' => self::get_responsive_breakpoints(),
                // The icon picker enables FontAwesome only on the string
                // "true"; declared explicitly to keep the existing behaviour
                // (FontAwesome off) rather than leaving it undefined.
                'fontAwesome' => 'false',
                // The font picker disables itself only on the string "false".
                'googleFont' => 'true',
            ));

            if ($pagenow === 'post-new.php' || $pagenow === 'post.php') {
                wp_localize_script('notice-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow === 'site-editor.php' || $pagenow === 'themes.php') {
                wp_localize_script('notice-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'essential-blocks-editor-css',
                NOTICE_BLOCK_ADMIN_URL . 'dist/modules.css',
                array(),
                $controls_version,
                'all'
            );

            // The icon picker's popup styles (.wip-icon-area, .wip-iconpicker-popup,
            // tabs) are emitted to a separate stylesheet. Without it the icon
            // grid collapses into one broken line.
            if (file_exists(NOTICE_BLOCK_ADMIN_PATH . '/dist/style-modules.css')) {
                wp_enqueue_style(
                    'essential-blocks-editor-style-modules-css',
                    NOTICE_BLOCK_ADMIN_URL . 'dist/style-modules.css',
                    array('essential-blocks-editor-css'),
                    $controls_version,
                    'all'
                );
            }
        }
    }

    /**
     * Responsive breakpoints used by the editor preview.
     *
     * Mirrors EbStyleHandlerParseCss::get_responsive_breakpoints(), which the
     * frontend CSS generator uses, so the editor and the generated stylesheet
     * always break at the same widths. Read-only on purpose — this must not
     * write defaults back to the option the way the style handler does.
     *
     * @return array{tablet:int,mobile:int}
     */
    public static function get_responsive_breakpoints()
    {
        $defaults = array(
            'tablet' => 1024,
            'mobile' => 767,
        );

        $settings = get_option('eb_settings', array());
        if (!is_array($settings) || !isset($settings['responsiveBreakpoints'])) {
            return $defaults;
        }

        $breakpoints = $settings['responsiveBreakpoints'];

        // The option is sometimes stored as a JSON string rather than an array.
        if (is_string($breakpoints)) {
            $breakpoints = json_decode(html_entity_decode(stripslashes($breakpoints)), true);
        }

        if (!is_array($breakpoints) && !is_object($breakpoints)) {
            return $defaults;
        }
        $breakpoints = (array) $breakpoints;

        return array(
            'tablet' => !empty($breakpoints['tablet']) ? absint($breakpoints['tablet']) : $defaults['tablet'],
            'mobile' => !empty($breakpoints['mobile']) ? absint($breakpoints['mobile']) : $defaults['mobile'],
        );
    }

    public static function get_block_register_path($blockname, $blockPath)
    {
        if ((float) get_bloginfo('version') <= 5.6) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Notice_Block_Helper::register();