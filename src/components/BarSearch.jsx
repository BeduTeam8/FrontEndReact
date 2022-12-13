import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
//import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import BasicMenu from "./MenuInSearchResults";



// create 
const books = [  "The Great Gatsby",  "Moby-Dick",  "One Hundred Years of Solitude",  "Pride and Prejudice",  "War and Peace",];

// Shuffle the books array using the Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

;

// create a switch case function based on the state of BasicMenu and export placeholder for inputbase
const Placeholder = (props) => { // create a component called Placeholder
	const placeholder = (BasicMenu) => { // create a function called placeholder
	  switch (BasicMenu) { // check the value of BasicMenu
		case "Books":
		  return "Intrested in reading "+ (
			books[Math.floor(Math.random() * books.length)] 
			+ "?"
			// return a random book from the books array
		  )
		  ; // return a string
		case "Genre":
		  return "Search for genre";
		case "Author":
		  return "Search for your favorite author";
		case "Editorial":
		  return "Search for editorial";
		default:
		  return "Looking for a book to read?";
	  }
	}
  
	return ( // return the following code
	  <InputBase
		className="InputBase"
		placeholder={placeholder(props.BasicMenu)} // call the placeholder function and pass the value of BasicMenu as an argument
		inputProps={{ "aria-label": "Search Bar" }}
	  />
	);
  }


export default function BarSearch() {

	// 1. Define a state variable to hold the current menu item
	const [basicMenu, setBasicMenu] = React.useState("Books");

	// 2. Define a function that will update the menu item state variable
	function handleMenuItemSelect(menuItem) {
	  setBasicMenu(menuItem);
	}

	return (
		<Paper
		className="DropDown transparent "
			component="form"
			sx={{ m: "auto", display: "flex", flexDirection: "column", width: 600 }}
		>
			<Paper className="BasicMenu-Container">
			<BasicMenu onMenuItemSelect={handleMenuItemSelect} />

			</Paper>
			<Paper
			className="SearchBar transparent"
				component="form"

			>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon className="SearchBar-Icon" />
				</IconButton>
				<Placeholder BasicMenu={basicMenu} />
				<IconButton sx={{ p: "10px" }} aria-label="menu">
					<CancelIcon  className="SearchBar-Icon" />
				</IconButton>
			</Paper>
		</Paper>
	);
}
