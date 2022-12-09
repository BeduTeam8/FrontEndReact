import React from "react";
//import Banner from "../components/banner";
import BarSearch from "../components/BarSearch";
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

function SearchResult() {
	return (
		<div>
			<BarSearch></BarSearch>

			<h1>Hola Mundo d </h1>
		</div>
	);
}

export default SearchResult;
