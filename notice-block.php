<?php

/**
 * Plugin Name:     Notice
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Put Spotlight On News, Announcements & Let The Visitors Find It Easily
 * Version:         1.2.2
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     notice-block
 *
 * @package         notice-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_notice_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/notice" block first.'
		);
	}

	$index_js     = 'build/index.js';
	wp_register_script(
		'create-block-notice-block-editor',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
			'wp-editor',
		),
		filemtime("$dir/$index_js")
	);


	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-notice-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$frontend_js = 'build/frontend.js';
	wp_register_script(
		'essential-blocks-notice-frontend',
		plugins_url($frontend_js, __FILE__),
		array("jquery", "wp-editor"),
		filemtime("$dir/$frontend_js"),
		true
	);


	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/notice')) {
		register_block_type('notice-block/notice', array(
			'editor_script' => 'create-block-notice-block-editor',
			'editor_style'  => 'create-block-notice-block-editor',
			'render_callback' => function ($attribs, $content) {
				if (!is_admin()) {
					wp_enqueue_script('essential-blocks-notice-frontend');
				}
				return $content;
			}
		));
	}
}
add_action('init', 'create_block_notice_block_init');
