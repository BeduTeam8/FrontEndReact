import * as React from "react";
import "../css/Root.css";
import {
	Divider,
	List,
	ListItem,
	Typography,
	Button,
	Switch,
} from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
// search icon from material ui
import { Search, AutoStories } from "@mui/icons-material/";
import BaseNav from "./Root/BaseNav.jsx";
import SignupNav from "./Root/SignUpNav.jsx";

// if /sign up switch BaseNav to Signupnav
const navSwitch = () => {
	if (window.location.pathname === "/signup") {
		return <SignupNav />;
	} else {
		return <BaseNav />;
	}
};

// Context provider

function ResponsiveDrawer() {
	return (
		<>
			<nav className="Drawer-wrapper">
				{/* logo with prop mode dark */}
				<Logo mode="dark" />
				<List className="Nav-List">{navSwitch()}</List>
				<Divider />
			</nav>
			<Outlet />
		</>
	);
}

export default ResponsiveDrawer;
