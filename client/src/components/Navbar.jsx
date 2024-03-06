import React from "react";

const Navbar = () => {
	return (
		<>
			<header>
				<div className="px-2 py-6 w-full">
					<div className="flex justify-between w-[90%] max-w-[1280px] m-auto ">
						<div>
							<a href="/" className="text-xl font-medium">
								Wordpress
							</a>
						</div>
						<div className="flex gap-4">
							<div>
								<a href="/samplepage">Sample Page</a>
							</div>
							<div>
								<a href="/login">Login</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
