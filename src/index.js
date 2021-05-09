import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./components/edit";
import save from "./components/save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("notice-block/notice", {
	apiVersion: 2,
	title: __("Notice", "block"),
	description: __(
		"Put Spotlight On News, Announcements & Let The Visitors Find It Easily",
		"block"
	),
	category: "widgets",
	keywords: [
		__("EB notice", "essential-blocks"),
		__("notice", "essential-blocks"),
		__("notice block", "essential-blocks"),
	],
	icon,
	attributes,
	edit: Edit,
	save,
});
