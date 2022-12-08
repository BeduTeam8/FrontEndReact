import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
// import App from "./pages/App";
//import Home from "./pages/Home";
import SearchResult from "./pages/SearchResults";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<SearchResult/>
	</React.StrictMode>
);
