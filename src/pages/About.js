import React from "react";
import { Button, Link, Card, CardContent, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import github logo from matierial icons
import { GitHub } from "@mui/icons-material";
import "../css/About.css";

export default function About() {
	return (
		<main className="DrawerOpen">
			<Card className="About-Root">
				<CardContent className="About-Content">
					<Button className="About-Back" variant="outline">
						<ArrowBackIcon />
						Back
					</Button>
					<Typography className="About-Header FF-Roboto" variant="h1">
						About US
					</Typography>
					<Typography className="About-Body" variant="body1">
						"Libraverse the Spotify of books" is an API-REST, it is designed for
						managing a book lending system by subscription. It gives access to
						the information, to whoever requires it from the data it contains.
						Provides the information of the entities created, also offers the
						CRUD methods to handle each entity.
					</Typography>
					<Typography className="About-Body" variant="body1">
						As part of the Santander Bedu 2022 Innovation Technology
						Scholarship, we have developed an API for subscription-based book
						lending. Our team is composed of Miguel, Francisco, Jesús, Juan.
						This API allows users to easily borrow books by subscribing to a
						service, providing them with convenient access to a wide range of
						books. We are proud of our work and believe that it has the
						potential to greatly improve the way people access and enjoy books.
						We are grateful to have been given the opportunity to participate in
						the scholarship program and to work on such an exciting project.
					</Typography>
					<Typography className="About-Body" variant="body1">
						In this project, we used a number of tools to build a React-based
						application. These tools included{" "}
						<a href="https://emotion.sh/docs/introduction">Emotion</a> for
						styling components,{" "}
						<a href="https://material-ui.com/">Material UI</a> for creating user
						interface elements,{" "}
						<a href="https://testing-library.com/docs/react-testing-library/intro">
							Testing Library
						</a>{" "}
						for running tests on our application,{" "}
						<a href="https://reactrouter.com/web/guides/quick-start">
							React Router
						</a>{" "}
						for managing routing within our application, and{" "}
						<a href="https://github.com/GoogleChromeLabs/web-vitals">
							web-vitals
						</a>{" "}
						for measuring key web performance metrics. We also used the{" "}
						<a href="https://github.com/futurepress/epub.js/blob/develop/README.md">
							epubjs
						</a>{" "}
						library for working with ebooks, and{" "}
						<a href="https://github.com/FormidableLabs/react-swipeable#readme">
							react-swipeable
						</a>{" "}
						for creating swipeable components. These tools allowed us to build a
						robust and functional application that met our needs.
					</Typography>
					<ul className="About-grid">
						<li>
							<Link href="https://github.com/toonchavez8">
								<GitHub />
								@toonchavez8
							</Link>
							Miguel Chavez
						</li>
						<li>
							<Link href="https://github.com/FrankTII">
								<GitHub />
								@FrankTII
							</Link>
							FrankTII
						</li>
						<li>
							<Link href="https://github.com/Angel123Lara">
								<GitHub />
								@Angel123Lara
							</Link>{" "}
							Angel Lara
						</li>
						<li>
							<Link href="https://github.com/juanjosalco">
								<GitHub />
								@juanjosalco
							</Link>
							Juan José Salazar Cortés
						</li>
					</ul>
					<Link href="https://github.com/BeduTeam8/FrontEndReact">
						<GitHub /> GitHub Page for FrontEndReact
					</Link>
				</CardContent>
			</Card>
		</main>
	);
}
