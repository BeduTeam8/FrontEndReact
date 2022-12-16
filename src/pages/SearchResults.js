import React from "react";
//import Banner from "../components/banner";
import BarSearch from "../components/BarSearch";
import "../css/SearchResults.css";

function SearchResult() {
	return (
		<main className="searchResults DrawerOpen">
			<BarSearch></BarSearch>
		</main>
	);
}

export default SearchResult;
