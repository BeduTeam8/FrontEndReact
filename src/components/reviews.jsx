import React from "react";
import BuildReviews from "./buildReviews";

const Reviews = ({ user, profileImage, review }) => {
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
                    "user": "John Wick",
                    "profileImage": "http://www.lacabecita.com/wp-content/uploads/Keanu-Reeves.png",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something different to expand my knowledge."
                },
                {
                    "user": "John Wick",
                    "profileImage": "http://www.lacabecita.com/wp-content/uploads/Keanu-Reeves.png",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something different to expand my knowledge."
                },
                {
                    "user": "John Wick",
                    "profileImage": "http://www.lacabecita.com/wp-content/uploads/Keanu-Reeves.png",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something different to expand my knowledge."
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
            },
            "reviews":[
                {
                    "user": "John Wick",
                    "profileImage": "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/16:9/w_2560%2Cc_limit/Keanu-Reeves.jpg",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something different to expand my knowledge."
                },
                {
                    "user": "John Wick",
                    "profileImage": "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/16:9/w_2560%2Cc_limit/Keanu-Reeves.jpg",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something  to expand my knowledge."
                },
                {
                    "user": "John Wick",
                    "profileImage": "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/16:9/w_2560%2Cc_limit/Keanu-Reeves.jpg",
                    "review": "I was looking for something to expand my knowledge and that is what brought me to this product,I had it for about a month and found it to be a little boring so I sent it back but I am glad I did because now I am looking for something different to expand my knowledge."
                }
            ]
        }
    ]

    return (
        <div className="reviews">{
            libros[0].reviews.map(({user, profileImage, review}) => (
            <BuildReviews 
                user = {user}
                profileImage={profileImage}
                review={review}
            /> 
        ))}
        </div>
    );
};  

export default Reviews;