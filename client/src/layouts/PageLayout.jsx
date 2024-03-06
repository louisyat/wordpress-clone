import React from "react";

const PageLayout = ({ children }) => {
	return (
		<>
			<main className="w-full">
				<div className="p-8 w-[90%] max-w-[1280px] m-auto">{children}</div>
			</main>
		</>
	);
};

export default PageLayout;
