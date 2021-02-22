/**
 * Core block extend.
 *
 * @package waldos-blocks
 */

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, BaseControl, SelectControl, Button, ToggleControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { assign, isEmpty } = window.lodash;
const { withSelect, select } = wp.data;
const { getBlockDefaultClassName } = wp.blocks;

/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */
const permittedBlocks = [
	'core/columns',
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

	classNames.push( `${ prefix }` );

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
			equalHeight: {
				type: 'boolean',
				default: false,
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
		const { className } = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody id="waldos-blocks-equal-columns" title={ __( 'Equal Height Columns', 'waldos-blocks' ) } initialOpen={ false } className="has-range-control">
						<BaseControl>
							<ToggleControl
                                label={ __('Set equal height columns', 'waldos-blocks') }
                                checked={ !! attributes.equalHeight }
								onChange={ ( value ) => { setAttributes( { equalHeight: value, className: getNewClassNames( className, value, 'wf-columns-equal-height' ) } ) } }
                            />
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);

	};

}, 'withInspectorControl' );

addFilter( 'blocks.registerBlockType', 'waldos-blocks/block-equal-height', addAdditionalAttributes );
addFilter( 'editor.BlockEdit', 'waldos-blocks/block-equal-height', withInspectorControls );
