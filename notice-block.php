<?php

/**
 * Plugin Name:     Notice
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Put Spotlight On News, Announcements & Let The Visitors Find It Easily
 * Version:         1.4.0
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     notice-block
 * Requires at least: 6.0
 * Requires PHP:    7.4
 *
 * @package         notice-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

if (!defined('NOTICE_BLOCK_VERSION')) {
	define('NOTICE_BLOCK_VERSION', "1.4.0");
}
if (!defined('NOTICE_BLOCK_ADMIN_URL')) {
	define('NOTICE_BLOCK_ADMIN_URL', plugin_dir_url(__FILE__));
}
if (!defined('NOTICE_BLOCK_ADMIN_PATH')) {
	define('NOTICE_BLOCK_ADMIN_PATH', dirname(__FILE__));
}

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';

/**
 * The style handler ships as a git submodule and is what generates and
 * enqueues this block's frontend CSS. Guard the require so an uninitialised
 * submodule degrades instead of fataling the whole site — but surface it as an
 * admin notice, because without it the block renders completely unstyled on the
 * frontend and the failure is otherwise silent.
 */
if (file_exists(__DIR__ . '/lib/style-handler/style-handler.php')) {
	require_once __DIR__ . '/lib/style-handler/style-handler.php';
} else {
	add_action('admin_notices', function () {
		if (!current_user_can('activate_plugins')) {
			return;
		}
		printf(
			'<div class="notice notice-error"><p><strong>%1$s</strong> %2$s</p></div>',
			esc_html__('Notice Block:', 'notice-block'),
			esc_html__('the bundled style-handler library is missing, so the block will render without any styling on the frontend. This is a git submodule, not a compiled asset. If you are running from a git checkout, run "git submodule update --init --recursive" in the plugin directory. If this is an installed release, reinstall the complete package.', 'notice-block')
		);
	});
}

function create_block_notice_block_init()
{

	$script_asset_path = NOTICE_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "notice-block/notice" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	if (!is_array($script_asset)) {
		$script_asset = array();
	}
	$script_asset_deps    = isset($script_asset['dependencies']) && is_array($script_asset['dependencies']) ? $script_asset['dependencies'] : array();
	$script_asset_version = isset($script_asset['version']) ? $script_asset['version'] : NOTICE_BLOCK_VERSION;

	$all_dependencies = array_merge($script_asset_deps, array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'notice-block-controls-util',
		'essential-blocks-eb-animation'
	));

	$index_js     = NOTICE_BLOCK_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-notice-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset_version,
		true
	);

	$load_animation_js = NOTICE_BLOCK_ADMIN_URL . 'assets/js/eb-animation-load.js';
	wp_register_script(
		'essential-blocks-eb-animation',
		$load_animation_js,
		array(),
		NOTICE_BLOCK_VERSION,
		true
	);

	$animate_css = NOTICE_BLOCK_ADMIN_URL . 'assets/css/animate.min.css';
	wp_register_style(
		'essential-blocks-animation',
		$animate_css,
		array(),
		NOTICE_BLOCK_VERSION
	);


	$frontend_js = NOTICE_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-notice-frontend',
		$frontend_js,
		array('essential-blocks-eb-animation'),
		NOTICE_BLOCK_VERSION,
		true
	);

	/**
	 * `dist/style.css` is only emitted when something under `src/` imports a
	 * stylesheet. Nothing does today — every visual style for this block is
	 * generated at runtime by the style handler — so registering the URL
	 * unconditionally produced a 404 in both the editor and the frontend.
	 * Fall back to a src-less handle, which still carries the animation
	 * stylesheet dependency through to whoever enqueues it.
	 */
	$style_css_path = NOTICE_BLOCK_ADMIN_PATH . '/dist/style.css';
	$style_css      = file_exists($style_css_path) ? NOTICE_BLOCK_ADMIN_URL . 'dist/style.css' : false;
	wp_register_style(
		'notice-block-editor-css',
		$style_css,
		// Icons are Dashicons (Font Awesome is disabled for this plugin). Core only
		// loads them on the frontend for logged-in users and not in the editor canvas.
		array('essential-blocks-animation', 'dashicons'),
		NOTICE_BLOCK_VERSION,
		"all"
	);

	// Skip registering only when the full Essential Blocks plugin already
	// provides *this* block. The name checked here used to be
	// `essential-blocks/number-counter`, copy-pasted from a sibling plugin,
	// which suppressed the Notice block whenever an unrelated block was present.
	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/notice')) {
		register_block_type(
			Notice_Block_Helper::get_block_register_path("notice-block/notice", NOTICE_BLOCK_ADMIN_PATH),
			array(
				'editor_script' => 'create-block-notice-block-editor',
				'editor_style' 	=> 'notice-block-editor-css',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_style('notice-block-editor-css');
						wp_enqueue_script('essential-blocks-notice-frontend');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_notice_block_init');
