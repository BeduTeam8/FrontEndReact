import React from "react";
import LoginBookGrid from "../components/LoginBookGrid";
import "../css/Signup.css";

export default function Signup() {
	return (
		<main className="DrawerOpen">
			<div class="title">
				<h1 className="FS-64px FW-900 FF-Inter C-White">Dont Panic!</h1>
				<p className="FS-20px FW-500 FF-Inter C-Secondary-Red-500">
					All these can be yours, just SignUp!
				</p>
			</div>
			<LoginBookGrid />
		</main>
	);
}
