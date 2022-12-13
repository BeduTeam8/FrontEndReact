import React from "react";
import BuildBook from "./buildBook";

const Book = ({ image }) => {
    const libros = [
        {
            "id": 1,
            "book_name": "Momma's Man",
            "image": 'https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg.webp',
            "description": "Reverse-engineered web-enabled internet solution",
            "publication_date": "2022-01-07T20:27:29Z",
            "createdAt": "2022-11-12T20:57:03.000Z",
            "updatedAt": "2022-11-12T20:57:03.000Z",
            "CategoryId": 14,
            "EditorialId": 23,
            "AuthorId": 1,
            "Editorial": {
                "name": "Fringe-eared oryx"
            },
            "Category": {
                "genre": "literature"
            }, 
            "reviews":[
                {

                },
                {

                },
                {
                    
                }
            ]
        },
        {
            "id": 2,
            "book_name": "Dante's Inferno",
            "image": 'https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg.webp',
            "description": "Multi-layered intangible utilisation",
            "publication_date": "2022-03-17T15:27:03Z",
            "createdAt": "2022-11-12T20:57:03.000Z",
            "updatedAt": "2022-11-12T20:57:03.000Z",
            "CategoryId": 12,
            "EditorialId": 13,
            "AuthorId": 6,
            "Editorial": {
                "name": "Pocket gopher (unidentified)"
            },
            "Category": {
                "genre": "horror"
            }
        }
    ]

    return (
        <div className="book">
            <BuildBook image = {libros[0].image}/> 
        </div>
    );
};  

export default Book;