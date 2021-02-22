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

const STEP = 8;
const MAX = 232;

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
	const extraClass = 'has-custom-spacing';
	const prefixes = [ 'mt-', 'mb-', 'pt-', 'pb-', 'mts-', 'mbs-', 'pts-', 'pbs-' ];

	// Remove existing spacing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( existingClassName => {
		return ( ( 0 !== existingClassName.indexOf( prefix + '-' ) ) && extraClass !== existingClassName );
	} );

	// If other spacing classes are present we would want to keep the extra class.
	const hasOtherSpacingClasses = existingClassNames.find( existingClassName => {
		let hasClass = false;

		prefixes.forEach( _prefix => {
			if ( 0 === existingClassNames.indexOf( _prefix ) ) {
				hasClass = true;
			}
		} );

		return hasClass;
	} );

	if ( ! value ) {

		if ( hasOtherSpacingClasses ) {
			classNames.push( extraClass );
		}

		return classNames.join( ' ' );
	}

	classNames.push( `${ prefix }-${ value } ${ extraClass }` );

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

	if ( 'undefined' !== typeof settings.attributes ) {

		settings.attributes = Object.assign( settings.attributes, {
			marginTop: {
				type: 'number',
				default: 0,
			},
			marginBottom: {
				type: 'number',
				default: 0,
			},
			paddingTop: {
				type: 'number',
				default: 0,
			},
			paddingBottom: {
				type: 'number',
				default: 0,
			},
			marginTopSmall: {
				type: 'number',
				default: 0,
			},
			marginBottomSmall: {
				type: 'number',
				default: 0,
			},
			paddingTopSmall: {
				type: 'number',
				default: 0,
			},
			paddingBottomSmall: {
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

		const { attributes, setAttributes, isSelected } = props;
		const { marginTop, marginBottom, paddingTop, paddingBottom, marginTopSmall, marginBottomSmall, paddingTopSmall, paddingBottomSmall, className } = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody id="waldos-blocks-heading-font-size" title={ __( 'Spacing', 'waldos-blocks' ) } initialOpen={ false } className="has-range-control">
						<BaseControl>
							<RangeControl
								label={ __( 'Margin Top (px)', 'waldos-blocks' ) }
								value={ marginTop }
								onChange={ ( value ) => { setAttributes( { marginTop: value, className: getNewClassNames( className, value, 'mt' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Bottom (px)', 'waldos-blocks' ) }
								value={ marginBottom }
								onChange={ ( value ) => { setAttributes( { marginBottom: value, className: getNewClassNames( className, value, 'mb' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Top (px)', 'waldos-blocks' ) }
								value={ paddingTop }
								onChange={ ( value ) => { setAttributes( { paddingTop: value, className: getNewClassNames( className, value, 'pt' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Bottom (px)', 'waldos-blocks' ) }
								value={ paddingBottom }
								onChange={ ( value ) => { setAttributes( { paddingBottom: value, className: getNewClassNames( className, value, 'pb' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody id="waldos-blocks-mobile-spacings" title={ __( 'Spacing - Mobile', 'waldos-blocks' ) } initialOpen={ false } className="has-range-control">
						<BaseControl>
							<RangeControl
								label={ __( 'Margin Top (px)', 'waldos-blocks' ) }
								value={ marginTopSmall }
								onChange={ ( value ) => { setAttributes( { marginTopSmall: value, className: getNewClassNames( className, value, 'mts' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Bottom (px)', 'waldos-blocks' ) }
								value={ marginBottomSmall }
								onChange={ ( value ) => { setAttributes( { marginBottomSmall: value, className: getNewClassNames( className, value, 'mbs' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Top (px)', 'waldos-blocks' ) }
								value={ paddingTopSmall }
								onChange={ ( value ) => { setAttributes( { paddingTopSmall: value, className: getNewClassNames( className, value, 'pts' ) } ) } }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Bottom (px)', 'waldos-blocks' ) }
								value={ paddingBottomSmall }
								onChange={ ( value ) => { setAttributes( { paddingBottomSmall: value, className: getNewClassNames( className, value, 'pbs' ) } ) } }
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

addFilter( 'blocks.registerBlockType', 'waldos-blocks/block-spacing', addAdditionalAttributes );
addFilter( 'editor.BlockEdit', 'waldos-blocks/block-spacing', withInspectorControls );
