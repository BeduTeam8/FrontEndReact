import * as React from "react";
import PropTypes from "prop-types";
import "../css/Root.css";

import { Divider, List, ListItem, Toolbar } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

function ResponsiveDrawer() {
	return (
		<>
			<nav className="Drawer-wrapper">
				{/* logo with prop mode dark */}
				<Logo mode="dark" />
				<Toolbar />
				<Divider />
				<List>
					<ListItem>
						<Link to="/login">Login</Link>
					</ListItem>

					<ListItem>
						<Link to="/about">About</Link>
					</ListItem>

					<ListItem>
						<Link to="/signup">Signup</Link>
					</ListItem>

					<ListItem>
						<Link to="/">Search</Link>
					</ListItem>
				</List>
				<Divider />
			</nav>
			<Outlet />
		</>
	);
}

export default ResponsiveDrawer;
