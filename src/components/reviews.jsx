
import React, { useState, useEffect } from "react";
import BuildReviews from "./buildReviews";

const Reviews = () => {   
    
    const url = "https://libroverse-production.up.railway.app/review/"

const location = window.location.pathname;
console.log("Reviews.js: location: ", location);

const book = location.split("/")[3];

console.log("Reviews.js: book: ", book);

const [Reviews, setReviews] = useState([]);


const [userName, setUserName] = useState(null);


useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch(`${url}`, {
                mode: "cors",
            });
            console.log("Reviews.js: response: ", response);
            const data = await response.json();
            console.log("Reviews.js: data: ", data);
      // generate random number between 2 and 5
      const random = Math.floor(Math.random() * 5) + 2;

      // display random number of reviews
      const filteredReviews = data.slice(0, random);

      // get user IDs from filtered reviews
      const userIds = filteredReviews.map(review => review.user_id);
      
      console.log("Reviews.js: userIds: ", userIds);
     
      // map UserIds and get Username from user
        const userNames = userIds.map(userId => {
            fetch(`https://libroverse-production.up.railway.app/users/id/${userId}`, {
                mode: "cors",
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setUserName(data.user.username);
                console.log("Reviews.js: data: ", data.user.firstname);
            })
            .catch(error => console.log("Reviews.js: error: ", error));
        });
        console.log("Reviews.js: userNames: ", userNames);

        const reviewsWithUserNames = filteredReviews.map((review, index) => {
            return {
              ...review,
              userName: userNames[index],
            };
          });

            console.log("Reviews.js: reviewsWithUserNames: ", reviewsWithUserNames);



            setReviews(reviewsWithUserNames);
        } catch (error) {
            console.log("Reviews.js: error: ", error);
        }
    };
    //  add userNames to reviews

    // map userNames to reviews



    fetchReviews();
}, []);





return (
    <div className="reviews">
{Reviews.length === 0 ? (
  <p>There are no reviews for this book</p>
) : (
  Reviews.map((review, index) => (
    <BuildReviews
    key={review.id}
    review={review.review}
    rating={review.rating}
    user_id={review.userName}
    />
  ))
)}
    </div>
  );

};

export default Reviews;