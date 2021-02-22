/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import userIcon from "./assets/images/userProfile.svg";

export const name = 'waldos-blocks/team-block';

export const settings = {

	title: __("Team Block", "team-block"),

	description: __("Waldos Team member block", "team-block"),

	category: "common",

	icon: "smiley",

	attributes: {
		imgUrl: {
			type: "string",
			default: userIcon,
		},
		name: {
			type: "string",
			default: "Waldo",
		},
		intro: {
			type: "string",
			default: "Hey, pet me human",
		},
		description: {
			type: "string",
			default: "I take care of everyone around me and they love too",
		},
		twitter: {
			type: "string",
			default: "",
		},
		linkedin: {
			type: "string",
			default: "",
		},
	},

	edit: Edit,

	save: Save,
};
