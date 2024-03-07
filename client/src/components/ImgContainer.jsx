import React from "react";

const ImgContainer = ({ alt, imgUrl }) => {
	return (
		<div className="py-[80px]">
			<img className="rounded-3xl" src={imgUrl} alt={alt} />
		</div>
	);
};

export default ImgContainer;
