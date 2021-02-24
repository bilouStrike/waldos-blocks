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

	title: __("Video Block", "video-block"),

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
		outline_title: {
			type: 'string',
			default: 'Video outline'
		},
		video_url: {
			type: 'string',
			default: 'LrWe_VzegoM'
		},
		youtube_api_key: {
			type: 'string',
			default: 'AIzaSyAL0Otj6cbv26GlgyZ5YL1EmRuzxdjxroo'
		}
	},

	edit: Edit,

	save: () => null,
};
