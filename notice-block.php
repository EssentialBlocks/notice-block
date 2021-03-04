<?php
/**
 * Plugin Name:     Notice
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Put Spotlight On News, Announcements & Let The Visitors Find It Easily 
 * Version:         1.0.1
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

function create_block_notice_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/notice" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-notice-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-notice-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);


	$frontend_js = "src/frontend.js";
	wp_enqueue_script(
		'essential-blocks-notice-frontend',
		plugins_url( $frontend_js, __FILE__),
		array("jquery","wp-editor"),
		true
	);

		if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/notice' ) ) {
			register_block_type( 'create-block/notice-block', array(
			'editor_script' => 'create-block-notice-block-editor',
			'style'         => 'create-block-notice-block',
			'frontend_js'   => 'essential-blocks-notice-frontend',
			) );
		}
}
add_action( 'init', 'create_block_notice_block_init' );