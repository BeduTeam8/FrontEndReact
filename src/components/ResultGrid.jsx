import React from "react";


// import grid from material ui
import {Grid} from "@mui/material/";

// create an array of 8 random books

const ResultGrid = (props) => {
    if (props.items === 0){
        return(
            <h1>No hay resultados</h1>
        )
    }
  
    return (
      <Grid container spacing={2}>
        {props.items.map((items) => (
          <Grid items xs={2} sm={3} key={items.id} className="Grid-Card-BookCover">
            <h2>{items.title}</h2>
            <p>{items.author}</p>
          </Grid>
        ))}
      </Grid>
    );
  };




export default ResultGrid;
