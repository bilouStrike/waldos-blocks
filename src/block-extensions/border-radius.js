/**
 * Core block extend.
 *
 * @package waldos-blocks
 */

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, RangeControl, BaseControl, SelectControl, Button, ToggleControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { assign, isEmpty } = window.lodash;
const { withSelect, select } = wp.data;
const { getBlockDefaultClassName } = wp.blocks;

const STEP = 1;
const MAX = 50;

/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */
const permittedBlocks = [
	'core/group',
];

/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value New class Name.
 *
 * @return {string}
 */
const getNewClassNames = ( className, value, prefix ) => {
	const existingClassNames = className ? className.split( ' ' ) : [];

	// Remove existing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( existingClassName => {
		return ( ( 0 !== existingClassName.indexOf( prefix + '-' ) ) );
	} );

	if ( ! value ) {
		return classNames.join( ' ' );
	}

	classNames.push( `${ prefix }-${ value }` );

	return classNames.join( ' ' );
};


/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
const addAdditionalAttributes = ( settings ) => {

	if ( 'undefined' !== settings.name && permittedBlocks.includes( settings.name ) ) {

		settings.attributes = Object.assign( settings.attributes, {
			borderRadius: {
				type: 'number',
				default: 0,
			},
		} );

	}

	return settings;
};

/**
 * Higher order component with inspector controls for extending core block.
 */
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		if ( ! permittedBlocks.includes( props.name ) ) {

			return (
				<BlockEdit { ...props } />
			);
		}

		const { attributes, setAttributes } = props;
		const { borderRadius, className } = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody id="waldos-blocks-border-radius" title={ __( 'Border Radius', 'waldos-blocks' ) } initialOpen={ false } className="has-range-control">
						<BaseControl>
							<RangeControl
								label={ __( 'Border Radius (px)', 'waldos-blocks' ) }
								value={ borderRadius }
								onChange={ ( value ) => { setAttributes( { borderRadius: value, className: getNewClassNames( className, value, 'wf-border-radius' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);

	};

}, 'withInspectorControl' );

addFilter( 'blocks.registerBlockType', 'waldos-blocks/block-border-radius', addAdditionalAttributes );
addFilter( 'editor.BlockEdit', 'waldos-blocks/block-border-radius', withInspectorControls );
