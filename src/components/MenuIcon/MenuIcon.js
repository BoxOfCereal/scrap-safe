import React, { useState } from "react";
import "./MenuIcon.scss";
import { useToggleClassName } from "../../CustomHooks";

const MenuIcon = () => {
	const [change, toggleChange] = useToggleClassName("change");

	return (
		<>
			<div className={`menu-icon ${change}`} onClick={toggleChange}>
				<div className="bar1" />
				<div className="bar2" />
				<div className="bar3" />
			</div>
		</>
	);
};

export default MenuIcon;
