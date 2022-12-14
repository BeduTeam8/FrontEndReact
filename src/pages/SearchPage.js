import React from "react";
import ReactDOM from "react-dom";
// import inputlabe menutime formcontrol and select from @mui/material
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SimpleSelect() {
	const [age, setAge] = React.useState("");
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<main className="DrawerOpen">
			<h2 className="FS-64px FW-900 FF-Inter">Search Results</h2>

			<FormControl variant="outlined" className="Form">
				<InputLabel
					ref={inputLabel}
					id="demo-simple-select-outlined-label"
				></InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={age}
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>

				<InputLabel
					ref={inputLabel} /* This is the label for the select menu */
					id="demo-simple-select-outlined-label"
				>
					{/* search form */}
				</InputLabel>
				<form className="SearchForm">
					<input type="text" placeholder="Search" className="SearchInput" />
					<button type="submit" className="SearchButton">
						Search
					</button>
				</form>
			</FormControl>
		</main>
	);
}
ReactDOM.render(<SimpleSelect />, document.getElementById("root"));
