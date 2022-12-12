import React, { useState, useEffect } from "react";

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

	if (!genreData) return <p>Loading...</p>;

	return (
		<main className="DrawerOpen">
			<h1 className="FS-64px FW-900 FF-Inter">{genreName}</h1>
			<p>{genreData.description}</p>
			{genreData.Books.map((Books) => (
				<div key={Books.id}>
					<h2>{Books.book_name}</h2>
					<p>{Books.description}</p>
				</div>
			))}
		</main>
	);
}
