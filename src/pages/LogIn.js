import React from "react";
import LoginBookGrid from "../components/LoginBookGrid";
import "../css/Signup.css";

export default function Login() {
	return (
		<main className="DrawerOpen" style={{ marginLeft: "40rem" }}>
			<div class="title">
				<h1 className="FS-64px FW-900 FF-Inter C-White">Dont Panic!</h1>
				<p className="FS-20px FW-500 FF-Inter C-Secondary-Red-500">
					All these can be yours, just Login!
				</p>
			</div>
			<LoginBookGrid />
		</main>
	);
}
