/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

import './block-extensions/';

import * as first from "./first-block";
import * as teamBlock from "./team-block";
import * as videoBlock from "./video-block";
import * as tabsBlock from './tabs-block';

const blocks = [first, teamBlock, videoBlock, tabsBlock];

function registerBlock(block) {
	const { name, settings } = block;
	registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
