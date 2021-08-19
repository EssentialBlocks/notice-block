/**
 * WordPress dependeincies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import "./style.scss";

import Edit from "./edit";
import Save from "./save";
import { NoticeIcon } from "../util/icons";

import metadata from "../block.json";
import attributes from "./attributes";

import example from "./example";

const { name, category } = metadata;

registerBlockType(name, {
	apiVersion: 2,
	title: __("Notice", "block"),
	icon: NoticeIcon,
	description: __(
		"Put Spotlight On News, Announcements & Let The Visitors Find It Easily",
		"block"
	),
	category,
	attributes,
	keywords: [
		__("EB notice", "essential-blocks"),
		__("notice", "essential-blocks"),
		__("alert ", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
});
