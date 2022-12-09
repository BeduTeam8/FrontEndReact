import React, { useState,useEffect } from "react";
import DataRow from "./dataRow";
 //const URL="https://libroverse-production.up.railway.app";
//const URL="http://localhost:4000"

const DataList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
 useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(
        `/category`,{mode:'cors'}
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }  
  }
  getData()
}, [])


  
  // RESPONSE OF a Genre, withour books 
// "id": 25,
//     "genre": "young adult",
//     "description": "Function-based fault-tolerant analyzer",
//     "createdAt": "2022-11-12T20:57:03.000Z",
//     "updatedAt": "2022-11-12T20:57:03.000Z",
//     "Books": [


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
            <th>description</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
        {data &&
          data.map(({ id, genre,description,createdAt,updatedAt}) => (
            <DataRow key={id} genre={genre} description={description}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
              
          ))}      
        </tbody>
      </table>
    </div>
  );
}

export default DataList;