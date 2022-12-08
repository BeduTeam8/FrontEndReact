import React from "react";
// declare import react from react

import ReactDOM from "react-dom/client";
// We import ReactDOM from the react-dom/client package.

import "./css/index.css";
// import App from "./pages/App";
import Root from "./pages/Root";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import Error from "./pages/404Error";

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";
/* Here is the explanation for the code above:
  1. We import 3 functions from the 'react-router-dom' package.
  2. The createRoutesFromElements function creates an array of routes from an array of elements.
  3. The createBrowserRouter function creates a router for the browser.
  4. The RouterProvider function provides the router to the application.
  5. The Route function creates a route. */

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<Error />}>
			<Route errorElement={<Error />}>
				<Route index element={<SearchPage />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
