import React, { useState,useEffect } from "react";
import DataRow from "./dataRow";
 //const URL="https://libroverse-production.up.railway.app";
//const URL="http://localhost:4000"

const DataList = ({endPoint}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("Endpint iniciando: DataList",endPoint);

 useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(endPoint,{mode:'cors'}
      );

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
      console.log("data length from API:",Object.keys(actualData).length);
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }  
  }
  getData()
}, [endPoint])


  
  // RESPONSE OF a Genre, withour books 
// "id": 25,
//     "genre": "young adult",
//     "description": "Function-based fault-tolerant analyzer",
//     "createdAt": "2022-11-12T20:57:03.000Z",
//     "updatedAt": "2022-11-12T20:57:03.000Z",
//     "Books": [

  
console.log("data before return:Endpoint: ",endPoint, data)
switch (endPoint){
  case "category":
    return (
      <div className="datalist">
          <h2 className="themeFontColor text-center">
            <center>Data from LibraryVerse {endPoint}</center>
          </h2>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <center><table className="table table-hover">
          <thead>
            <tr>
              <th>Genre</th>
              <th>Description</th>

              <th>Books...</th>

            </tr>
          </thead>
          <tbody>
          {data &&
            data.map((item) => (
          <tr key={item.id}>
            <td>{item.genre}</td>
            <td>{item.description}</td>
          </tr>
          ))}      
          </tbody>
        </table></center>
      </div>
    );

    case "book":
      return(
          <div className="datalist">
              <h2 className="themeFontColor text-center">
              <center>Data from LibraryVerse {endPoint}</center>
              </h2>
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <center><table className="table table-hover">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Description</th>
                  <th>Publication date</th>
                  
                  {/* <th>AuthorId</th> */}
                  <th>Author</th>
                  
                  {/* <th>EditorialId</th> */}
                  <th>Editorial</th>

                  {/* <th>CategoryId</th> */}
                  <th>Category Genre</th>
                </tr>
              </thead>
              <tbody>
              {data &&
                data.map((item) => (
              <tr key={item.id}>
                <td>{item.book_name}</td>
                <td>{item.description}</td>
                <td>{item.publication_date}</td>
                                
                {/* <td>{item.AuthorId}</td> */}
                <td>{item.Author.name}</td>

                {/* <td>{item.EditorialId}</td> */}
                <td>{item.Editorial.name}</td>

                {/* <td>{item.CategoryId}</td> */}
                <td>{item.Category.genre}</td>
              </tr>
              ))}      
              </tbody>
            </table></center>
          </div>
      );
    
      case "author":
    //   "id": 1,
		// "name": "Blackish oystercatcher",
		// "bio": "Multi-channelled 24 hour software",
		// "prizes": "Face to face background flexibility",
		// "createdAt": "2022-11-12T20:57:03.000Z",
		// "updatedAt": "2022-11-12T20:57:03.000Z",
		// "Books": [
		// 	{
		// 		"book_name": "Momma's Man",
		// 		"description": "Reverse-engineered web-enabled internet solution",
		// 		"AuthorId": 1
		// 	},
      return(
          <div className="datalist">
              <h2 className="themeFontColor text-center">
              <center>Data from LibraryVerse {endPoint}</center>
              </h2>
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <center><table className="table table-hover">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Biography</th>
                  <th>Prizes</th>
                  
                  <th>Books...</th>
                  
                </tr>
              </thead>
              <tbody>
              {data &&
                data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.bio}</td>
                <td>{item.prizes}</td>
              </tr>
              ))}      
              </tbody>
            </table></center>
          </div>
      );
      case "editorial":
    // "id": 1,
		// "name": "Great white pelican",
		// "country": "Brazil",
		// "editorial_desc": "Programmable radical standardization",
		// "createdAt": "2022-11-12T02:56:14.000Z",
		// "updatedAt": "2022-11-12T02:56:14.000Z",
		// "Books": [
		// 	{
		// 		"id": 79,
		// 		"book_name": "Trouble with the Truth, The",
		// 		"description": "Profound tertiary database",
		// 		"publication_date": "2022-08-04T12:33:31Z",
		// 		"createdAt": "2022-11-12T02:56:15.000Z",
		// 		"updatedAt": "2022-11-12T02:56:15.000Z",
		// 		"CategoryId": 10,
		// 		"EditorialId": 1,
		// 		"AuthorId": 43
		// 	},
    return(
      <div className="datalist">
          <h2 className="themeFontColor text-center">
          <center>Data from LibraryVerse {endPoint}</center>
          </h2>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <center><table className="table table-hover">
          <thead>
            <tr>
              <th>Editorial</th>
              <th>Description</th>
              <th>Country</th>
              
              <th>Books...</th>
              
            </tr>
          </thead>
          <tbody>
          {data &&
            data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.editorial_desc}</td>
            <td>{item.country}</td>
          </tr>
          ))}      
          </tbody>
        </table></center>
      </div>
  ); 
  case "review":
    // {
    //   "id": 1,
    //   "review": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    //   "rating": 2.2,
    //   "user_id": 37,
    //   "book_id": 139,
    //   "createdAt": "2022-11-12T20:57:04.000Z",
    //   "updatedAt": "2022-11-12T20:57:04.000Z"
    // },
    // {
    //   "id": 2,
    //   "review": "Cras non velit nec nisi vulputate nonummy.",
    //   "rating": 4.2,
    //   "user_id": 25,
    //   "book_id": 47,
    //   "createdAt": "2022-11-12T20:57:04.000Z",
    //   "updatedAt": "2022-11-12T20:57:04.000Z"
    // },  
  return(
    <div className="datalist">
        <h2 className="themeFontColor text-center">
        <center>Data from LibraryVerse {endPoint}</center>
        </h2>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <center><table className="table table-hover">
        <thead>
          <tr>
            <th>Rating</th>
            <th>Review</th>
            <th>User Id</th>
            <th>Book Id</th>
            
          </tr>
        </thead>
        <tbody>
        {data &&
          data.map((item) => (
        <tr key={item.id}>
          <td>{item.rating}</td>
          <td>{item.review}</td>
          <td>{item.user_id}</td>
          <td>{item.book_id}</td>
        </tr>
        ))}      
        </tbody>
      </table></center>
    </div>
);
case "order":
  // "message": "Heres the orders you were looking for",
	// "orders": [
	// 	{
	// 		"id": 1,
	// 		"user_id": 17,
	// 		"payment_amount": 11.99,
	// 		"order_date": "2022-11-12T20:57:04.000Z",
	// 		"createdAt": "2022-11-12T20:57:04.000Z",
	// 		"updatedAt": "2022-11-12T20:57:04.000Z"
	// 	},
	// 	{
	// 		"id": 2,
	// 		"user_id": 1,
	// 		"payment_amount": 11.99,
	// 		"order_date": "2022-11-12T20:57:04.000Z",
	// 		"createdAt": "2022-11-12T20:57:04.000Z",
	// 		"updatedAt": "2022-11-12T20:57:04.000Z"
	// 	},
  return(
    <div className="datalist">
        <h2 className="themeFontColor text-center">
        <center>Data from LibraryVerse {endPoint}</center>
        </h2>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <center><table className="table table-hover">
      
        <thead>
        
          <tr>
            <th>User Id</th>
            <th>Payment Amount</th>
            <th>Order date</th>            
          </tr>
        </thead>
        <tbody>
        {data &&
          data.orders.map((item) => (
        <tr key={item.id}>
          <td>{item.user_id}</td>
          <td>{item.payment_amount}</td>
          <td>{item.order_date}</td>
        </tr>
        ))}      
        </tbody>
      </table></center>
    </div>
);
case 'users':
  // {
  //   "message": "here are all the users",
  //   "users": [
  //     {
  //       "id": 1,
  //       "username": "mgarmon0",
  //       "firstname": "Melanie",
  //       "lastname": "Garmon",
  //       "address": "1286 Carpenter Crossing",
  //       "email": "mgarmon0@aboutads.info",
  //       "password_hash": "XXXX",
  //       "password_salt": "XXXX",
  //       "phonenumber": "252-459-7830",
  //       "membersince": "2021-12-09T19:16:50Z",
  //       "credit_card_type": null,
  //       "credit_card": "5108759527443478",
  //       "rol": 2,
  //       "isPremium": false,
  //       "isActive": true,
  //       "createdAt": "2022-11-12T20:57:03.000Z",
  //       "updatedAt": "2022-11-12T20:57:03.000Z"
  //     },
  //     {
  //       "id": 2,
  //       "username": "mbarnwall1",
  return(
    <div className="datalist">
        <h2 className="themeFontColor text-center">
        <center>Data from LibraryVerse {endPoint}</center>
        </h2>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <center><table className="table table-hover">
      
        <thead>
        
          <tr>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Address</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Member Since</th>
            <th>Credit Card Type</th>
            <th>Credit Card</th>
            <th>Rol</th> 
            <th>Premium</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
        {data &&
          data.users.map((item) => (
        <tr key={item.id}>
          <td>{item.username}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.address}</td>
          <td>{item.email}</td>
          <td>{item.phonenumber}</td>
          <td>{item.membersince}</td>
          <td>{item.credit_card_type}</td>
          <td>{item.credit_card}</td>
          <td>{item.rol}</td>
          <td>{item.isPremium}</td>
          <td>{item.isActive}</td>

        </tr>
        ))}      
        </tbody>
      </table></center>
    </div>
);
  default:
    return;
  }
}

export default DataList;