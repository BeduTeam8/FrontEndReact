import React, { useState } from "react";
import { useEffect } from "react";

export default function BookDetails() {
	//get location
	const location = window.location.pathname;

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
		<main>
			<h2 className="FS-64px FW-900 FF-Inter">Book Details</h2>
			{/* display book data */}
			{bookdata && (
				<div>
					<h2 className="FS-20px FF-Alegreya FW-500">{bookdata.book_name}</h2>
					<p className="FS-10px FF-Inter FW-300">{bookdata.description}</p>

					{/* extract Category id from book */}
					<p className="FS-10px FF-Inter FW-300">
						Category: {bookdata.CategoryId}
					</p>

					{/* extract Author id from book */}
					<p className="FS-10px FF-Inter FW-300">
						Author: {bookdata.EditorialId}
					</p>

					{/* extract Author name from book */}
				</div>
			)}
		</main>
	);
}
