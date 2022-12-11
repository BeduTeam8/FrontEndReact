import React from "react";

import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);
	return <div>{error.message}</div>;
}

export default function ErrorPage() {
	return (
		<main id="error-page" style={{ gap: "2rem", paddingBlock: "5rem" }}>
			{/* 404 img */}
			<img
				src="https://www.nicepng.com/png/full/212-2123719_book-404.png"
				alt="404 error"
				style={{ width: "15%", minWidth: "150px" }}
			/>
			<h1 className="FS-64px FW-900 FF-Inter">Oops!</h1>
			<p className="FS-24px FW-500 FF-Inter">
				Sorry, an unexpected error has occurred.
			</p>
			<p className="FS-16px FW-900 FF-Inter">
				<i>
					<ErrorBoundary />
				</i>
			</p>
		</main>
	);
}
