/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";

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
        }
	},

	edit: Edit,

	save: () => null,
};
