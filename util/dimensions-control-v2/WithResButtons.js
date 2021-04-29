const handleDesktopBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-desktop");
	document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
	setAttributes({
		resOption: "desktop",
	});
};
const handleTabBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-tab");
	document.body.classList.remove(
		"eb-res-option-desktop",
		"eb-res-option-mobile"
	);
	setAttributes({
		resOption: "tab",
	});
};
const handleMobileBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-mobile");
	document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
	setAttributes({
		resOption: "mobile",
	});
};

export default function WithResButtons({
	className,
	children,
	resOption,
	setAttributes,
}) {
	return (
		<div className={`wrap_res ${className || " "}`}>
			<div className="resIcons">
				<span
					onClick={() => handleDesktopBtnClick({ setAttributes })}
					class={`typoResButton dashicons dashicons-desktop ${
						resOption === "desktop" ? "active" : " "
					}`}
				></span>
				<span
					onClick={() => handleTabBtnClick({ setAttributes })}
					class={`typoResButton dashicons dashicons-tablet ${
						resOption === "tab" ? "active" : " "
					}`}
				></span>
				<span
					onClick={() => handleMobileBtnClick({ setAttributes })}
					class={`typoResButton dashicons dashicons-smartphone ${
						resOption === "mobile" ? "active" : " "
					}`}
				></span>
			</div>
			{children}
		</div>
	);
}
