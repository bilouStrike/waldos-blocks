/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";

export const name = 'waldos-blocks/video-block';

export const settings = {

	title: __("Vudeo Block", "video-block"),

	description: __("Waldos Video block", "video-block"),

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
		title: {
			type: "string",
			default: "Teaching fetch to your dog",
		},
	},

	edit: Edit,

	save: () => null,
};
