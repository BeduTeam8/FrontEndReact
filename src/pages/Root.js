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

import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import BaseNav from "./Root/BaseNav.jsx";
import SignUpNav from "./Root/SignUpNav.jsx";

// Context provider to switch between SignUpNav and BaseNav
export const NavContext = React.createContext();

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

	// 4. Return the correct Nav component based on the current location
	return (
		<NavContext.Provider value={nav}>
			{nav === "/signup" ? <SignUpNav /> : <BaseNav />}
		</NavContext.Provider>
	);
}

// Responsive drawer component
function ResponsiveDrawer() {
	return (
		<>
			{/* toggle hover class on nav  */}
			<nav
				className={
					useLocation().pathname === "/signup"
						? "Drawer-wrapper "
						: "Drawer-wrapper Hover"
				}
			>
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
