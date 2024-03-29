import React from "react";

const Navbar = () => {
	return (
		<>
			<header>
				<div className="px-2 py-5 w-full fixed top-0 z-50">
					<div className="flex justify-between w-[87%] max-w-[1280px] m-auto ">
						<div>
							<a href="/" className="text-xl font-medium">
								Wordpress
							</a>
						</div>
						<div className="flex gap-4 font-normal">
							<div>
								<a href="/samplepage">Sample Page</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
