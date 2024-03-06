import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="w-full">
				<div className="p-8 w-[90%] max-w-[1280px] m-auto">
					<div className="text-center max-w-[620px] m-auto mt-[70px]">
						<h1 className="text-4xl font-serif">
							A commitment to innovation and sustainability
						</h1>
						<p className="py-7 font-sans">
							Études is a pioneering firm that seamlessly merges creativity and
							functionality to redefine architectural excellence.
						</p>
						<Button>About Us</Button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
