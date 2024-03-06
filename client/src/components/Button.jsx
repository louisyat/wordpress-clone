import React from "react";

const Button = ({ children }) => {
	return (
		<>
			<button className="px-5 py-2 bg-gray-950 text-white rounded">
				{children}
			</button>
		</>
	);
};

export default Button;
