
import React from "react";
import Book from "../components/book";
import ReturnComponent from "../components/returnComponent"
import BookInformation from "../components/bookInformation"
import Reviews from "../components/reviews"
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function BookDetails() {
	//get location
	const location = window.location.pathname;
	console.log("BookDetails.js: location: ", location);

	//get book id from location
	const bookId = location.split("/")[3];

	console.log("BookDetails.js: bookId: ", bookId);

	const [bookdata, setBookData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/book/id/${bookId}`, {
				mode: "cors",
			});
			const data = await response.json();
			setBookData(data);
			console.log("BookDetails.js: data: ", data);
		};
		fetchData();
	}, [bookId]);

	return (

		<div className="bookDetails">
			<h2 className="FS-64px FW-900 FF-Inter" style={{"textAlign": "center", "padding": "32px"}}>Book Details</h2>
				<ReturnComponent/>
			<div className="bookAndInfo" style={{"display": "flex", "marginLeft": "20%"}}>
				<Book/>
				<BookInformation/>
			</div>
			<p style={{"fontWeight": "bold", "color": "#425357", "textAlign": "center", "marginTop": "2rem", "fontSize": "1.3rem"}}>REVIEWS</p>
			<Reviews/>
		</div>

					<Link to={location + "/read"}>
						<Button variant="contained">Read</Button>
					</Link>


	);
}
