import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import SamplePage from "./pages/SamplePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/samplepage",
		element: <SamplePage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/post",
		element: <Post />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
