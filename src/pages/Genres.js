import React from "react";
//import React from 'react';

import DataList from "../components/dataList";
import "../css/Genres.css";

export default function Genres() {
	return (
		<main>
			<h2 className="FS-64px FW-900 FF-Inter">Book Genres</h2>
			<DataList />
		</main>
	);
}
