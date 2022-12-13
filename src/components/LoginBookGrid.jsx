import React from "react";
import { Link } from "react-router-dom";

// import grid from material ui
import {Grid} from "@mui/material/";

// create an array of 8 random books
const books = [
    {
        id: 1,
        title: "The Hobbit",
        img:"https://i0.wp.com/stonesoup.com/wp-content/uploads/2018/05/2018-6-The-Hobbit.jpg?fit=306%2C500&ssl=1"
    },
    {
        id: 2,
        title: "The Lord of the Rings",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"
    },
    {
        id: 3,
        title: "The Silmarillion",
        img:"https://i.ebayimg.com/images/g/hdYAAOSwPvZf~yC~/s-l600.jpg"
    },

    {
        id: 4,
        title: "The Children of Hurin",
        img:"https://upload.wikimedia.org/wikipedia/en/8/85/The_Children_of_Hurin_cover.jpg"
    },
    {
        id: 5,
        title: "A Game of Thrones",
        img:"https://kbimages1-a.akamaihd.net/388d9a08-ba12-4f50-9659-d5250744ac57/1200/1200/False/a-game-of-thrones-the-story-continues-books-1-5-a-game-of-thrones-a-clash-of-kings-a-storm-of-swords-a-feast-for-crows-a-dance-with-dragons-a-song-of-ice-and-fire.jpg"
    },
    {
        id: 6,
        title: "The HitchHikers Guide to the Galaxy",
        img:"https://m.media-amazon.com/images/I/91TpAAdiBLL.jpg"
    },
    {
        id: 7,
        title: "The Restaurant at the End of the Universe",
        img:"https://i.pinimg.com/474x/78/9a/3d/789a3d59ea860e800d672d3833d580a4--douglas-adams-the-restaurant.jpg"
    },
    {
        id: 8,
        title: "Life, the Universe and Everything",
        img:"https://covers.openlibrary.org/b/id/8569242-L.jpg"
    },
]


const LoginBookGrid = () => {
 

    return (
        
        <Grid container spacing={2}>
            {books.map((book) => (
                <Grid item xs={2} sm={3} key={book.id} className="Grid-Card-BookCover">
                    <Link to={`/book/${book.id}`}>
                        <img src={book.img}

                            alt={book.title}
                            className="BookCover"
                        />
                    </Link>
                </Grid>
            ))}
        </Grid>

    )
}





export default LoginBookGrid;
