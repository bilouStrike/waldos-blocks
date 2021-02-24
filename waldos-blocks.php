<?php
/**
 * Plugin Name:     Waldos Blocks
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     waldos-blocks
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_waldos_blocks_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/waldos-blocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	array_push($script_asset['dependencies'], 'wp-editor');
	wp_register_script(
		'create-block-waldos-blocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-waldos-blocks-block-editor', 'waldos-blocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-waldos-blocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-waldos-blocks-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'create-block/waldos-blocks',
		array(
			'editor_script' => 'create-block-waldos-blocks-block-editor',
			'editor_style'  => 'create-block-waldos-blocks-block-editor',
			'style'         => 'create-block-waldos-blocks-block',
		)
	);
}
add_action( 'init', 'create_block_waldos_blocks_block_init' );


/**
 * Setup Editor color palette.
 *
 * @return void
 */
function waldos_setup_theme_supported_features() {

	// Editor color palette.
	$black        = '#2D2C2A';
	$dark_gray    = '#666666';
	$gray         = '#CCCCCC';
	$green        = '#6EAE46';
	$blue         = '#1CAABA';
	$red          = '#DC5252';
	$orange       = '#E9722E';
	$yellow       = '#FEEA83';
	$light_red    = '#FFE9E9';
	$light_blue   = '#E5FBFD';
	$light_yellow = '#FBE8C8';
	$light_orange = '#FFEFE7';
	$light_green  = '#EAF9E1';
	$white        = '#FFFFFF';

	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name'  => esc_html__( 'Black', 'waldos-blocks' ),
				'slug'  => 'black',
				'color' => $black,
			),
			array(
				'name'  => esc_html__( 'Dark gray', 'waldos-blocks' ),
				'slug'  => 'dark-gray',
				'color' => $dark_gray,
			),
			array(
				'name'  => esc_html__( 'Gray', 'waldos-blocks' ),
				'slug'  => 'gray',
				'color' => $gray,
			),
			array(
				'name'  => esc_html__( 'Green', 'waldos-blocks' ),
				'slug'  => 'green',
				'color' => $green,
			),
			array(
				'name'  => esc_html__( 'Blue', 'waldos-blocks' ),
				'slug'  => 'blue',
				'color' => $blue,
			),
			array(
				'name'  => esc_html__( 'Red', 'waldos-blocks' ),
				'slug'  => 'red',
				'color' => $red,
			),
			array(
				'name'  => esc_html__( 'Orange', 'waldos-blocks' ),
				'slug'  => 'orange',
				'color' => $orange,
			),
			array(
				'name'  => esc_html__( 'Yellow', 'waldos-blocks' ),
				'slug'  => 'yellow',
				'color' => $yellow,
			),
			array(
				'name'  => esc_html__( 'Light Red', 'waldos-blocks' ),
				'slug'  => 'light_red',
				'color' => $light_red,
			),
			array(
				'name'  => esc_html__( 'Light Blue', 'waldos-blocks' ),
				'slug'  => 'light_blue',
				'color' => $light_blue,
			),
			array(
				'name'  => esc_html__( 'Light Orange', 'waldos-blocks' ),
				'slug'  => 'light_orange',
				'color' => $light_orange,
			),
			array(
				'name'  => esc_html__( 'Light Yellow', 'waldos-blocks' ),
				'slug'  => 'light_yellow',
				'color' => $light_yellow,
			),
			array(
				'name'  => esc_html__( 'Light Green', 'waldos-blocks' ),
				'slug'  => 'light_green',
				'color' => $light_green,
			),
			array(
				'name'  => esc_html__( 'White', 'waldos-blocks' ),
				'slug'  => 'white',
				'color' => $white,
			),
		)
	);

	add_theme_support(
		'editor-gradient-presets',
		array(
			array(
				'name'     => esc_html__( 'Green to yellow', 'waldos-blocks' ),
				'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
				'slug'     => 'green-to-yellow',
			),
			array(
				'name'     => esc_html__( 'Yellow to green', 'waldos-blocks' ),
				'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
				'slug'     => 'yellow-to-green',
			),
			array(
				'name'     => esc_html__( 'Red to yellow', 'waldos-blocks' ),
				'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
				'slug'     => 'red-to-yellow',
			),
			array(
				'name'     => esc_html__( 'Yellow to red', 'waldos-blocks' ),
				'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
				'slug'     => 'yellow-to-red',
			),
		)
	);
}

add_action( 'after_setup_theme', 'waldos_setup_theme_supported_features', 11 );
