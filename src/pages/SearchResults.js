import React from "react";
//import Banner from "../components/banner";
import BarSearch from "../components/BarSearch";
import "../css/SearchResults.css";

const ApiUrl = "https://libroverse-production.up.railway.app";

function SearchResult() {
	return (
		<main className="searchResults">
			<BarSearch></BarSearch>
		</main>
	);
}

export default SearchResult;
