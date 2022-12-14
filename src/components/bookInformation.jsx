import React from "react";
import BuildBookInformation from "./buildBookInformation";
import { useState, useEffect } from "react";

const BookInformation = ({ title, author, genre, editorial, description }) => {
  	//get location
	const location = window.location.pathname;


	//get book id from location
	const bookId = location.split("/")[3];

	console.log("BookDetails.js: bookId: ", bookId);

	const [bookdata, setBookData] = useState(null);

    //get author id from book data
    const authorId = bookdata?.AuthorId;


    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          // Fetch book data
          const response = await fetch(`/book/id/${bookId}`, {
            mode: "cors",
          });
          const data = await response.json();
          setBookData(data);
  
      
          // Fetch author data
          const authorResponse = await fetch(`/author/id/${authorId}`, {
            mode: "cors",
          });
          const authorData = await authorResponse.json();
          setAuthorData(authorData);

        };
        fetchData();
      }, [bookId, authorId]);

    // get AuthorId from book data and fetch by author data as well


    return (
        <div className="bookInformation">
            <BuildBookInformation 
                title={bookdata?.book_name}
                author={authorData?.name}
                genre={bookdata?.Category.genre}
                editorial={bookdata?.Editorial.name}
                description={bookdata?.description}

            /> 
        </div>
    );
};  

export default BookInformation;