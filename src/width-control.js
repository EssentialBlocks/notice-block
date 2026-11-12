import { __ } from "@wordpress/i18n";
import { dispatch } from "@wordpress/data";
import { RangeControl, Button } from "@wordpress/components";

// Responsive width control for the notice box. It reads/writes the same
// attribute names generateResponsiveRangeAttributes() creates, so the CSS comes
// from generateResponsiveRangeStyles() like every other responsive range.
// (The shared ResponsiveRangeController lives in the prebuilt controls bundle,
// which does not export it.)

const DEVICES = [
	{ key: "Desktop", prefix: "", icon: "dashicons-desktop" },
	{ key: "Tablet", prefix: "TAB", icon: "dashicons-tablet" },
	{ key: "Mobile", prefix: "MOB", icon: "dashicons-smartphone" },
];

const UNITS = [
	{ label: "px", value: "px", min: 50, max: 1920 },
	{ label: "%", value: "%", min: 1, max: 100 },
	{ label: "vw", value: "vw", min: 1, max: 100 },
];

const setPreviewDeviceType = (device) => {
	try {
		const { editor_type } = window.eb_conditional_localize || {};
		const store = editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";
		const fn = dispatch(store).__experimentalSetPreviewDeviceType;
		fn && fn(device);
	} catch (e) {
		// preview switching is a nicety; the attribute change still applies
	}
};

export default function WidthControl({
	baseLabel,
	controlName,
	resRequiredProps,
}) {
	const { attributes, setAttributes, resOption } = resRequiredProps;
	const device = DEVICES.find((d) => d.key === resOption) || DEVICES[0];

	const rangeKey = `${device.prefix}${controlName}Range`;
	const unitKey = `${device.prefix}${controlName}Unit`;
	const value = attributes[rangeKey];
	const unit = attributes[unitKey] || "px";
	const unitConf = UNITS.find((u) => u.value === unit) || UNITS[0];

	return (
		<div className="eb-notice-width-control">
			<div
				style={{
					display: "flex",
					flexWrap: "nowrap",
					alignItems: "center",
					gap: 6,
					marginBottom: 8,
					whiteSpace: "nowrap",
				}}
			>
				<span
					className="components-base-control__label"
					style={{ margin: 0, flexShrink: 0 }}
				>
					{baseLabel}
				</span>

				{DEVICES.map((d) => (
					<span
						key={d.key}
						onClick={() => {
							setAttributes({ resOption: d.key });
							setPreviewDeviceType(d.key);
						}}
						className={`typoResButton dashicons ${d.icon} ${
							resOption === d.key ? "active" : ""
						}`}
						style={{ margin: 0, flexShrink: 0 }}
					></span>
				))}

				<span
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: 8,
						marginLeft: "auto",
						flexShrink: 0,
					}}
				>
					{UNITS.map((u) => (
						<span
							key={u.value}
							role="button"
							tabIndex={0}
							onClick={() => setAttributes({ [unitKey]: u.value })}
							onKeyDown={(e) =>
								(e.key === "Enter" || e.key === " ") &&
								setAttributes({ [unitKey]: u.value })
							}
							style={{
								cursor: "pointer",
								fontSize: 11,
								lineHeight: "18px",
								textTransform: "uppercase",
								fontWeight: u.value === unit ? 600 : 400,
								color: u.value === unit ? "#551ef7" : "#5f5f5f",
							}}
						>
							{u.label}
						</span>
					))}
				</span>
			</div>

			<RangeControl
				value={value}
				min={unitConf.min}
				max={unitConf.max}
				step={1}
				initialPosition={unitConf.min}
				__nextHasNoMarginBottom
				onChange={(v) => setAttributes({ [rangeKey]: v })}
			/>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: 4,
					fontSize: 12,
					color: "#757575",
				}}
			>
				<span>
					{value === undefined
						? __("Not set (full width)", "essential-blocks")
						: `${value}${unit}`}
				</span>
				{value !== undefined && (
					<Button
						variant="link"
						isSmall
						onClick={() => setAttributes({ [rangeKey]: undefined })}
					>
						{__("Reset", "essential-blocks")}
					</Button>
				)}
			</div>
		</div>
	);
}
