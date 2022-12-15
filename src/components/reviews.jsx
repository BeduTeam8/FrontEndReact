
import React, { useState, useEffect } from "react";
import BuildReviews from "./buildReviews";
import URL from "../api/api";

const Reviews = () => {   
    


const location = window.location.pathname;

const book = location.split("/")[3];

console.log("Reviews.js: book: ", book);

const [Reviews, setReviews] = useState([]);



useEffect(() => {

      // check if reviews for this book have already been stored in session storage
      let storedReviews = sessionStorage.getItem(book);
      if (storedReviews) {
        // if so, retrieve them and set them in the component state
        setReviews(JSON.parse(storedReviews));
        return;
      }
    const fetchReviews = async () => {
        try {
            const response = await fetch(`${URL}/review/`, {
                mode: "cors",
            });
            console.log("Reviews.js: response: ", response);
            const data = await response.json();
            console.log("Reviews.js: data: ", data);
      // generate random number between 2 and 5
      const random = Math.floor(Math.random() * 5) + 0;

 // add random avatar image to each review
const reviewsWithImg = data.map(review => {
  const randomImg = Math.floor(Math.random() * 70) + 1;
  return {
    ...review,
    img: `https://i.pravatar.cc/150?img=${randomImg}`,
  };
});

// display random number of reviews
const filteredReviews = reviewsWithImg.slice(0, random);


      // get user IDs from filtered reviews
      const userIds = filteredReviews.map(review => review.user_id);
     
      const userNames = userIds.map(async userId => {
        try {
          const response = await fetch(`${URL}/users/id/${userId}`, {
            mode: "cors",
          });
          const data = await response.json();
          return data.user.firstname;
        } catch (error) {
          console.log("Reviews.js: error: ", error);
        }
      });
      
      // wait for all usernames to be fetched before continuing
      const resolvedUserNames = await Promise.all(userNames);
      
      const reviewsWithUserNames = filteredReviews.map((review, index) => {
        return {
          ...review,
          userName: resolvedUserNames[index],
        };
      });
      
      setReviews(reviewsWithUserNames);

      // store reviews in session storage
      sessionStorage.setItem(book, JSON.stringify(reviewsWithUserNames));

        } catch (error) {
            console.log("Reviews.js: error: ", error);
        }
    };

    fetchReviews();
}, [
// only run this effect if the book changes
    book,]);



return (
    <div className="reviews">
{Reviews.length === 0 ? (
  <p>There are no reviews for this book</p>
) : (
  Reviews.map((review, index) => (
    <BuildReviews
    key={review.id}
    profileImage={review.img}
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