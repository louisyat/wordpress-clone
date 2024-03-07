import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionLayout from "../layouts/SectionLayout";
import ImgContainer from "../components/ImgContainer";

const Home = () => {
	return (
		<>
			<Navbar />
			<SectionLayout sectionBg="#f9f9f9">
				<div className="text-center   mt-[140px]">
					<h1 className="text-4xl font-serif max-w-[525px] m-auto">
						A commitment to innovation and sustainability
					</h1>
					<p className="py-6 font-sans max-w-[555px] m-auto text-lg">
						Études is a pioneering firm that seamlessly merges creativity and
						functionality to redefine architectural excellence.
					</p>
					<Button>About Us</Button>
				</div>
				<ImgContainer
					alt="Building Exterior"
					imgUrl="./assets/imgs/building-exterior.webp"
				/>
			</SectionLayout>
		</>
	);
};

export default Home;
