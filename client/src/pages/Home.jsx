import React from "react";

const Home = () => {
	return (
		<>
			<div className=" flex bg-sky-100 h-screen w-full place-items-center justify-center flex-col gap-2">
				<div className="border-2 border-teal-400 px-5 py-3 rounded-lg">
					Home
				</div>
				<div className="border-2 border-teal-400 px-5 py-3 rounded-lg">
					<a href="login">Sign in</a>
				</div>
			</div>
		</>
	);
};

export default Home;
