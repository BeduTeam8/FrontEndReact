import React, { useState } from 'react';
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import {Grid} from "@mui/material";
import { Link } from 'react-router-dom';

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
	<main>
		    <TextField
        label="Search"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
	  <Grid container direction="column" alignItems="center">
		{results.map((result) => (
		  <Grid item key={result.id}>
			<Link to={`https://libroverse-production.up.railway.app/book/id/${result.id}`} >
			{result.book_name}
			</Link>
			</Grid>
		))}


  </Grid>
	</main>
 
  );
};

export default SearchResultsPage;
