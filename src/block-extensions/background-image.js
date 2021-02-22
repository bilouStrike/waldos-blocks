/**
 * Core block extend.
 *
 * @package waldos-blocks
 */

import * as Utils from './utils';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, BaseControl, SelectControl, Button, ToggleControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { assign, isEmpty } = window.lodash;
const { getBlockDefaultClassName } = wp.blocks;

/**
 * Add the background image attributes to the group block.
 *
 * @param {Object} settings Block settings.
 * @returns {Object} Filtered block settings.
 */
const bgImageAttributes = ( settings ) => {
	/**
	 * Array of block names where this attribute would be added.
	 *
	 * @type {string[]}
	 */
	const permittedBlocks = [
		'core/group',
	];

	if ( 'undefined' !== settings.name && permittedBlocks.includes( settings.name ) ) {

		settings.attributes = Object.assign( settings.attributes, {
			mediaId: {
				type: 'number',
				default: 0,
			},
			repeat: {
				type: 'boolean',
				default: false,
			},
			position: {
				type: 'string',
				default: 'center center',
			},
			url: {
				type: 'string',
				default: '',
			},
		} );

	}

	return settings;
};

/**
 * Higher order component to add layout dropdown in
 * block inspector.
 *
 * @return {jsx}
 */
const withBGImageControl = createHigherOrderComponent( ( BlockEdit ) => {

	/**
	 * Array of block names where this attribute would be added.
	 *
	 * @type {string[]}
	 */
	const permittedBlocks = [
		'core/group',
	];

	return ( props ) => {

		if ( ! permittedBlocks.includes( props.name ) ) {

			return (
				<BlockEdit { ...props } />
			);
		}

		const { setAttributes, attributes, name } = props;
		const { mediaId, repeat, url, position } = attributes;
		const { ImagePreview } = Utils;
		let blockProps = props;
		let defaultClasses = getBlockDefaultClassName( name );

		defaultClasses = ! isEmpty( attributes.layout ) ? defaultClasses + ' ' + attributes.layout : defaultClasses;

		const getBackgroundImageStyles = () => {
			if ( 0 != mediaId ) {
				return {
					backgroundImage: `url(${ url })`,
					backgroundRepeat: `${ repeat ? 'repeat' : 'no-repeat' }`,
					backgroundPosition: `${ position }`,
					...blockProps.style,
				};
			}

			return blockProps.style;
		};

		return (
			<Fragment>
				<div
					style={ getBackgroundImageStyles() }
					className={ defaultClasses }
				>
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<PanelBody id="waldos-blocks-bg-image" title={ __( 'Set Background Image', 'waldos-blocks' ) } initialOpen={ false }>

						<BaseControl>
							<ImagePreview id={ mediaId } setAttr={ setAttributes } />
						</BaseControl>

						<BaseControl>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes(
											{
												mediaId: media.id,
												url: media.url,
											}
										);
									} }
									allowedTypes={ ['image'] }
									value={ mediaId }
									render={ ( { open } ) => (
										<Button onClick={ open } isSecondary={ true }>
											{ __( 'Select Image', 'waldos-blocks' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>

							<Button
								onClick={ ( e ) => {
									e.preventDefault();
									setAttributes( {
										mediaId: 0,
										url: '',
										repeat: false,
										position: 'center center',
									} );
								}
								}
							>
								{ __( 'Clear', 'waldos-blocks' ) }
							</Button>
						</BaseControl>

						<BaseControl>
							<ToggleControl
								label={ __( 'Repeat background', 'waldos-blocks' ) }
								checked={ repeat }
								onChange={ () => {
									( 0 < mediaId ) ? setAttributes( { repeat: ! repeat } ) : false;
								} }
							/>
						</BaseControl>

						<BaseControl>
							<SelectControl
								label={ __( 'Select position', 'waldos-blocks' ) }
								multiple={ false }
								options={
									[
										{ label: __( 'Center Center', 'waldos-blocks' ), value: 'center center' },
										{ label: __( 'Center Top', 'waldos-blocks' ), value: 'center top' },
										{ label: __( 'Center Bottom', 'waldos-blocks' ), value: 'center bottom' },
										{ label: __( 'Right Top', 'waldos-blocks' ), value: 'right top' },
										{ label: __( 'Right Center', 'waldos-blocks' ), value: 'right center' },
										{ label: __( 'Right Bottom', 'waldos-blocks' ), value: 'right bottom' },
										{ label: __( 'Left Top', 'waldos-blocks' ), value: 'left top' },
										{ label: __( 'Left center', 'waldos-blocks' ), value: 'left center' },
										{ label: __( 'Left Bottom', 'waldos-blocks' ), value: 'left bottom' },
									]
								}
								onChange={ ( newPosition ) => setAttributes( { position: newPosition } ) }
							/>
						</BaseControl>

					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};

}, 'withBGImageControl');

/**
 * Callback function for block save.
 * This will add background image style to props.
 *
 * @param {Object} saveElementProps Block component props.
 * @param {Object} blockType Type of block.
 * @param {Object} attributes Block attributes object.
 *
 * @return {Object} Filtered props.
 */
const addBGImageToBlock = ( saveElementProps, blockType, attributes ) => {

	/**
	 * Array of block names where this attribute would be added.
	 *
	 * @type {string[]}
	 */
	const permittedBlocks = [
		'core/group',
	];

	// Do nothing if it's another block than our defined ones.
	if ( ! permittedBlocks.includes( blockType.name ) ) {
		return saveElementProps;
	}

	if ( attributes.url && ! isEmpty( attributes.url ) ) {

		assign(
			saveElementProps,
			{
				style: {
					backgroundImage: `url(${ attributes.url })`,
					backgroundRepeat: `${ attributes.repeat ? 'repeat' : 'no-repeat' }`,
					backgroundPosition: `${ attributes.position }`,
				},
			}
		);
	}

	return saveElementProps;
};

addFilter( 'blocks.registerBlockType', 'waldos-blocks/bg-image', bgImageAttributes );
addFilter( 'editor.BlockEdit', 'waldos-blocks/bg-image', withBGImageControl );
addFilter( 'blocks.getSaveContent.extraProps', 'waldos-blocks/bg-image', addBGImageToBlock );
