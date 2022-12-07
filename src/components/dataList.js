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
          <h5 className="themeFontColor text-center">
            Data from LibraryVerse Category
          </h5>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Genre</th>
              <th>Description</th>
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
        </table>
      </div>
    );

    case "book":
      return(
          <div className="datalist">
              <h5 className="themeFontColor text-center">
                Data from LibraryVerse Book
              </h5>
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Description</th>
                  <th>Publication date</th>
                  
                  <th>AuthorId</th>
                  <th>Author</th>
                  
                  <th>EditorialId</th>
                  <th>Editorial</th>

                  <th>CategoryId</th>
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
                                
                <td>{item.AuthorId}</td>
                <td>{item.Author.name}</td>

                <td>{item.EditorialId}</td>
                <td>{item.Editorial.name}</td>

                <td>{item.CategoryId}</td>
                <td>{item.Category.genre}</td>
              </tr>
              ))}      
              </tbody>
            </table>
          </div>
      );
  default:
    return;
  }
}

export default DataList;