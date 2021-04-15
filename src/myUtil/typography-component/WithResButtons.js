import {
	handleDesktopBtnClick,
	handleMobileBtnClick,
	handleTabBtnClick,
} from "./typoHelpers";

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
