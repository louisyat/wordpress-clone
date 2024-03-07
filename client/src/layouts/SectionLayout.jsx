import React from "react";

const PageLayout = ({ children, sectionBg }) => {
	return (
		<>
			<section className="w-full" style={{ backgroundColor: sectionBg }}>
				<div className="py-8 px-2 w-[87%] max-w-[1280px] m-auto ">
					{children}
				</div>
			</section>
		</>
	);
};

export default PageLayout;
