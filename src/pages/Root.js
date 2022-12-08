import * as React from "react";
import PropTypes from "prop-types";

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const drawerWidth = 500;

function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div style={{ background: "rgba(245, 184, 65, 1)" }}>
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
					<Link to="/searchpage">Search</Link>
				</ListItem>
			</List>
			<Divider />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<Outlet />
			<Box
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</Box>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"": {
							boxSizing: "border-box",
							width: drawerWidth,
							background: "rgba(245, 184, 65, 1)",
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"": {
							boxSizing: "border-box",
							width: drawerWidth,
							background: "rgba(245, 184, 65, 1)",
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
