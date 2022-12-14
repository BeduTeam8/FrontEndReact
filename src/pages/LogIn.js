import React from "react";
import LoginBookGrid from "../components/LoginBookGrid";
import "../css/Signup.css";

export default function Login() {
	return (
		<main className="DrawerOpen" style={{ marginLeft: "45rem" }}>
			<div className="title">
				<h1 className="FS-128px FW-900 FF-Inter C-White">Dont Panic!</h1>
				<p className="FS-30px FW-900 FF-Inter C-Secondary-Red-500">
					All these can be yours, just Login!
				</p>
			</div>
			<LoginBookGrid />
		</main>
	);
}
