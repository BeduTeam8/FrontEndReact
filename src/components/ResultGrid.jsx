import React from "react";
import { Link } from "react-router-dom";

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
            {props.items.map((articles) => (
                <Grid item xs={2} sm={3} key={articles.id} className="Grid-Card-BookCover">
                    <Link to={`/book/${articles.id}`}>
                        <img src={articles.img}

                            alt={articles.title}
                            className="BookCover"
                        />
                    </Link>
                </Grid>
            ))}
        </Grid>

    )
}





export default ResultGrid;
