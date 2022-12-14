import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularIndeterminate from "../components/loadingIndicator";

export default function GenreByName() {
	// get location
	const location = window.location.pathname;
	// get genre name from location
	const genreName = location.split("/")[3];

	console.log("GenreByName.js: genreName: ", genreName);
	// set state
	const [genreData, setGenreData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/category/id/${genreName}`, {
				mode: "cors",
			});
			const data = await response.json();
			setGenreData(data);
		};
		fetchData();
	}, [genreName]);

	console.log("GenreByName.js: genreData: ", genreData);

	if (!genreData) return <CircularIndeterminate />;

	return (
		<main className="DrawerOpen">
			{/* create a back arrow button */}
			<div className="Header">
				<Link to="/genres">
					<Button
						variant="contained"
						style={{
							backgroundColor: "#425357",
							color: "white",
							margin: "1rem",
						}}
					>
						<ArrowBackIcon style={{ marginRight: ".5rem" }} />
						back
					</Button>
				</Link>
				<div className="GenreName">
					<h1 className="FS-64px FW-900 FF-Inter T-Capitalize">{genreName}</h1>
					<p className="FS-20px FW-400 FF-Roboto">{genreData.description}</p>
				</div>
			</div>
			<section className="BookGrid">
				{genreData.Books.map((Books) => (
					<div key={Books.id} className="BookCard">
						<Link to={`/book/id/${Books.id}`}>
							<h2 className="FS-20px FF-Alegreya FW-500">{Books.book_name}</h2>
							<p className="FS-10px FF-Inter FW-300">{Books.description}</p>
						</Link>
					</div>
				))}
			</section>
		</main>
	);
}
