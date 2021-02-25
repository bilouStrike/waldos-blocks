/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from './save';
export const name = 'waldos-blocks/tabs-block';

export const settings = {

	title: __("Tabs Block", "tabs-block"),

	description: __("Waldos Tabs block", "tabs-block"),

	category: "common",

	icon: "video",

    supports: {
        align: [ 'full' ]
    },

	attributes: {
        align: {
            type: 'string',
            default: 'full'
        },
		transcript: {
			type: 'string',
            default: 'Transcript here'
		},
		about_author: {
			type: 'string',
            default: 'About the author'
		}
	},

	edit: Edit,

	save: Save,
};
