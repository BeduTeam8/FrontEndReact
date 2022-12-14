import Book from "../components/book";
import ReturnComponent from "../components/returnComponent";
import BookInformation from "../components/bookInformation";
import Reviews from "../components/reviews";
import React, { useState } from "react";

export default function BookDetails() {
	return (
		<main className="bookDetails DrawerOpen">
			{" "}
			<div className="BookDetails-Header ">
				<ReturnComponent />
				<h2
					className="FS-40px FW-900 FF-Inter"
					style={{ textAlign: "center", padding: "32px" }}
				>
					Book Details
				</h2>
			</div>
			<div
				className="bookAndInfo"
				style={{ display: "flex", marginLeft: "20%" }}
			>
				<Book />
				<BookInformation />
			</div>
			<p
				style={{
					fontWeight: "bold",
					color: "#425357",
					textAlign: "center",
					marginTop: "2rem",
					fontSize: "1.3rem",
				}}
			>
				REVIEWS
			</p>
			<Reviews />
		</main>
	);
}
