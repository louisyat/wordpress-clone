import React from "react";

const MainLayout = ({ children }) => {
	return (
		<>
			<div className="bg-red-300 flex justify-between px-2 py-1 absolute w-full">
				<div className="flex gap-2">
					<div>logo</div>
					<div>comment-icon</div>
					<div>new</div>
				</div>
				<div className="flex gap-1">
					<div>
						<p>Howdy, admin</p>
					</div>
					<div>user icon</div>
				</div>
			</div>
			<div className="bg-gray-800 w-[150px] h-screen pt-[32px]">
				<div className="pl-3 py-2 bg-sky-600 text-white">
					<a href="/">Dashboard</a>
				</div>
				<div className="pl-3 py-2 bg-gray-700 text-white">
					<a href="/post">Post</a>
				</div>
			</div>
			<div
				style={{ width: "calc(100% - 150px)", height: "calc(100% - 32px" }}
				className="absolute top-[32px] left-[150px] bg-gray-50"
			>
				{children}
			</div>
		</>
	);
};

export default MainLayout;
