import React from "react";
import LoginBookGrid from "../components/LoginBookGrid";
import "../css/Signup.css";

export default function Signup() {
	return (
		<main className="DrawerOpen" style={{ marginLeft: "50rem" }}>
			<div className="title">
				<h1 className="FS-128px FW-900 FF-Inter C-White">Dont Panic!</h1>
				<p className="FS-30px FW-900 FF-Inter C-Secondary-Red-500">
					All these can be yours, just SignUp!
				</p>
			</div>
			<LoginBookGrid />
		</main>
	);
}
