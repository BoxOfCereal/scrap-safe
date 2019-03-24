import { useState, useEffect } from "react";

function useToggleClassName(classNameString) {
	const [classString, setclassString] = useState("");
	const name = classNameString;

	const toggle = () => {
		if (name === classString) {
			setclassString("");
		} else {
			setclassString(name);
		}
	};

	return [classString, toggle];
}

export default useToggleClassName;
