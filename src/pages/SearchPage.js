import React from "react";
import ReactDOM from "react-dom";
import BarSearch from "../components/BarSearch";

export default function Landing() {
	
	return (
		<main>
			<h2 className="FS-64px FW-900 FF-Inter">Search Results</h2>
		<BarSearch></BarSearch>
			
		</main>
	);
}
ReactDOM.render(<Landing />, document.getElementById("root"));
