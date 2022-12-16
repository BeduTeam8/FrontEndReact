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
import BookDetails from "./pages/BookDetails";
import Genres from "./pages/Genres";
import GenreByName from "./pages/GenreByName";

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import ReactReader from "./pages/ReactReader";
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
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/genres" element={<Genres />} />
				<Route path="/searchresults" element={<SearchResults />} />
				<Route path="/bookdetails" element={<BookDetails />} />
				<Route path="*" element={<Error />} />
				{/* render Genreby name when route catagory/id {genre} is called */}
				<Route path="/category/id/:genre" element={<GenreByName />} />
				{/* Render BookById with route as book by id */}
				<Route path="/book/id/:id" element={<BookDetails />} />
				{/* import react reader on book id id read page */}
				<Route path="/book/id/:id/read" element={<ReactReader />} />
				{/* use loading indicator on load */}

				<Route path="/loading" element={<></>} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
