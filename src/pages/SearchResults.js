import React from "react";
//import Banner from "../components/banner";
import BarSearch from "../components/BarSearch";
import "../css/SearchResults.css";
import ResultGrid from "../components/ResultGrid";

//import BasicMenu from "../components/MenuInSearchResults";

// depending on menu selection send search bar route path to search results page
// const handleSearch = (event) => {
// 	let search = event.target.innerText;
// 	switch (search) {
// 		case "Books":
// 			return <SearchResults search={search} />;
// 		case "Genre":
// 			return <SearchResults search={search} />;
// 		case "Author":
// 			return <SearchResults search={search} />;
// 		case "Editorial":
// 			return <SearchResults search={search} />;
// 		default:
// 			return <SearchResults search={search} />;
// 	}
// };

const items = [];

function SearchResult() {
	return (
		<main className="searchResults">
			<BarSearch></BarSearch>

			<h1>Testing</h1>

			<ResultGrid items={items}></ResultGrid>
		</main>
	);
}

export default SearchResult;
