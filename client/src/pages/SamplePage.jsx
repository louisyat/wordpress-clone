import React from "react";

import Navbar from "../components/Navbar";
import PageLayout from "../layouts/PageLayout";

const SamplePage = () => {
	return (
		<>
			<Navbar />
			<PageLayout>
				<div>Sample Page</div>
			</PageLayout>
		</>
	);
};

export default SamplePage;
