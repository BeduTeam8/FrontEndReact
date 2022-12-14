import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { PropTypes } from "react";



export default function BasicMenu(props) {
	let menu = ["Books", "Genre", "Author", "Editorial"];
	const [anchorEl, setAnchorEl] = React.useState(null);

	let [opciones, setOpciones] = React.useState("Books");
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		console.log(event.target.innerText)
		setAnchorEl(null);
		if (event.target.innerText !== "") {
			setOpciones((opciones = event.target.innerText));
			props.onMenuItemSelect(event.target.innerText);
		} else setOpciones((opciones = "Books"));
	};

	function SetMenu() {
		let menuready = menu.map((element) => {
			return <MenuItem className="transparent BasicMenu-Item" onClick={handleClose}>{element}</MenuItem>;
		});
		return menuready;
	}

	// add handlesearch as params to menu

	return (
		<div className="transparent ">
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ textTransform: "none" }}
				className=" BasicMenu-Button"
			>
				{opciones}
			</Button>
			<Menu
				className=" BasicMenu"
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{SetMenu()}
			</Menu>
		</div>
	);
}
