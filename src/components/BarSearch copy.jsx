import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import BasicMenu from "./MenuInSearchResults";

// create a list of books
const books = [
	"The Great Gatsby",
	"Moby-Dick",
	"One Hundred Years of Solitude",
	"Pride and Prejudice",
	"War and Peace",
  ];

const URL = "https://libroverse-production.up.railway.app"
let URLFlow = "https://libroverse-production.up.railway.app"


// create an object with the URLs for the different values of BasicMenu
const URL_MAP = {
	Books: "https://libroverse-production.up.railway.app/book/name/",
	Genre: "https://libroverse-production.up.railway.app/category/id/",
	Author: "https://libroverse-production.up.railway.app/author/search/",
	Editorial: "https://libroverse-production.up.railway.app/editorial/search/",
  };

// create a switch case function based on the state of BasicMenu and export placeholder for inputbase
const Placeholder = (props) => { // create a component called Placeholder
	const [textInput, SetInputText] = React.useState("")

	const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);


	const textChange = (BasicMenu)=> (e) => {
		SetInputText(e.target.value)
		switch (BasicMenu){
			case "Books":
				URLFlow = URL + "/book/name/" + e.target.value
			break
			case "Genre":
				URLFlow = URL + "/category/id/" + e.target.value
			break
			case "Author":
				URLFlow = URL + "/author/search/" + e.target.value
			break
			case "Editorial":
				URLFlow = URL + "/editorial/search/" + e.target.value
			break
			default:
				URLFlow = URL
		}
		
	}
	if (props.InputField==="borrar" && textInput !== ""){
		SetInputText("")
	}

	

	

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
	React.useEffect(() => {
		console.log(URLFlow)
  		const getData = async () => {
    	try {
      		const response = await fetch(
        	URLFlow,{mode:'cors'}
      		);
      		if (!response.ok) {
        		throw new Error(
          		`This is an HTTP error: The status is ${response.status}`
        		);
      		}
      		let actualData = await response.json();
			console.log("La actualDAta:",actualData)
      		setData(actualData);
			setError(null);
			console.log("data length from API:",Object.keys(actualData).length);	
    	} catch(err) {
      		setError(err.message);
      		setData(null);
    	} finally {
			console.log("d")
      		setLoading(false);
    	}  
  	}
  	getData()
	}, [URLFlow])
	return ( // return the following code
	  <div>
		<InputBase
				className="InputBase"
				placeholder={placeholder(props.BasicMenu)} // call the placeholder function and pass the value of BasicMenu as an argument
				inputProps={{ "aria-label": "Search Bar" }}
				onChange={(e) => {
			
					// call API to search for results using the textInput value
					// and display the results in the component
					textChange(props.BasicMenu)(e)
				}}
				value={textInput}
		/>


	  </div>
	);
  }






export default function BarSearch() {

	

	// 1. Define a state variable to hold the current menu item
	const [basicMenu, setBasicMenu] = React.useState("Books");
	const [EraseInput, setEraseInput] = React.useState("");
	// 2. Define a function that will update the menu item state variable
	function handleMenuItemSelect(menuItem) {
	  setBasicMenu(menuItem);
	}
	function eraseText (){
		setEraseInput("borrar")
		console.log(EraseInput)
	}
	function offeraseText (){
		setEraseInput("")
		
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
				<TextField
			className='InputBase'
        label="Search"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
				<IconButton 
					sx={{ p: "10px" }} aria-label="menu"
					onMouseDown={eraseText}
					onMouseUp={offeraseText}
					>
					<CancelIcon  className="SearchBar-Icon" />
				</IconButton>
			</Paper>

		</Paper>
	);
}
