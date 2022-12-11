import * as React from "react";
import "../css/Root.css";
import { Divider, List } from "@mui/material";

import { Outlet, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import BaseNav from "./Root/BaseNav.jsx";
import SignUpNav from "./Root/SignUpNav.jsx";
import LoginNav from "./Root/LoginNav.jsx";

// Context provider to switch between SignUpNav and BaseNav
export const NavContext = React.createContext();

export const ClassRenderSwitch = React.createContext();

// use location to swap SignUpNav and BaseNav
function NavSwitch() {
	// 1. Get the current location of the page
	const location = useLocation();
	// 2. Create a state variable to store the current location
	const [nav, setNav] = React.useState(location.pathname);

	// 3. Update the state variable when the location changes
	React.useEffect(() => {
		setNav(location.pathname);
	}, [location]);

	// switch statement default as Base Nav
	const renderSwitch = () => {
		switch (nav) {
			case "/signup":
				return <SignUpNav />;
			case "/login":
				return <LoginNav />;
			default:
				return <BaseNav />;
		}
	};

	// 4. Return the correct Nav component based on the current location
	return (
		<NavContext.Provider value={nav}>
			{
				// switch statement default as Base Nav
				renderSwitch()
			}
		</NavContext.Provider>
	);
}

// function Classname Switch
function ClassNameRenderSwitch() {
	// 1. Get the current location of the page
	const location = useLocation();
	// 2. Create a state variable to store the current location
	const [nav, setNav] = React.useState(location.pathname);

	// 3. Update the state variable when the location changes
	React.useEffect(() => {
		setNav(location.pathname);
	}, [location]);

	// switch statement default as Base Nav
	const classrenderSwitch = () => {
		switch (nav) {
			case "/signup":
				return "Nav-Signup ";
			case "/login":
				return "Nav-Login";
			default:
				return "Hover ";
		}
	};

	// 4. Return the correct Nav component based on the current location
	return classrenderSwitch();
}

// Responsive drawer component
function ResponsiveDrawer() {
	return (
		<>
			{/* toggle hover class on nav  */}
			<nav className={"Drawer-wrapper" + " " + ClassNameRenderSwitch()}>
				{/* logo with prop mode dark */}
				<Logo mode="dark" />
				<List className="Nav-List">
					{/* NavSwitch component */}
					<NavSwitch />
				</List>
				<Divider />
			</nav>
			<Outlet />
		</>
	);
}

export default ResponsiveDrawer;
