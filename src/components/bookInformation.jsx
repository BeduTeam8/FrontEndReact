import React from "react";
import BuildBookInformation from "./buildBookInformation";

const BookInformation = ({ title, author, genre, editorial, description }) => {
    const libros = [
        {
            "id": 1,
            "book_name": "Momma's Man",
            "image": 'https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg.webp',
            "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Read more",
            "publication_date": "2022-01-07T20:27:29Z",
            "createdAt": "2022-11-12T20:57:03.000Z",
            "updatedAt": "2022-11-12T20:57:03.000Z",
            "CategoryId": 14,
            "EditorialId": 23,
            "AuthorId": 1,
            "Author": {
                "name": "Liselle Sambury"
            },
            "Editorial": {
                "name": "Fringe-eared oryx"
            },
            "Category": {
                "genre": "literature"
            }
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
        <div className="bookInformation">
            <BuildBookInformation 
            title={libros[0].book_name}
            author={libros[0].Author.name}
            genre={libros[0].Category.genre}
            editorial={libros[0].Editorial.name}
            description={libros[0].description}
            /> 
        </div>
    );
};  

export default BookInformation;