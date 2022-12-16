import React, { useState } from 'react';
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import {Grid} from "@mui/material";
import { Link } from 'react-router-dom';
import "../css/BarSearch.css";


const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://libroverse-production.up.railway.app/book/name/${searchQuery}`)
	  .then((response) => response.json())
	  .then((data) => setResults(data));
	console.log(results)
	console.log(searchQuery);
  };

  return (
	<section className='SearchBar'>
		    <div className="flex">
				<TextField
							className='InputBase'
						label="Search"
						value={searchQuery}
						onChange={event => setSearchQuery(event.target.value)}
					  />
					  <Button onClick={handleSearch} varient="outlined" >Search</Button>
			</div>
	  <Grid container direction="column" alignItems="center" className='Grid'>
		{results.map((result) => (
		  <Grid item key={result.id} className="BookCard">
			<Link to={`/book/id/${result.id}`} >
			{result.book_name}
			</Link>
			</Grid>
		))}
  </Grid>
	</section>
 
  );
};

export default SearchResultsPage;
