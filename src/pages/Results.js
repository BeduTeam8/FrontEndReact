import { useState, useEffect } from "react";
import useToken from '../hooks/useToken';

//console.log("SSToken",token)
//const URL="https://libroverse-production.up.railway.app";
//const URL="http://localhost:4000"
const endPoint=`/library`
//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsInVzZXIiOiJhZG1pbjExIiwicm9sZSI6MSwiZXhwIjoxNjcyOTc5MzUwLCJpYXQiOjE2NzAzODczNTB9.yELV2rNG_lwCZ_IFpG5Xl7b2lBF15-RjSwvA0WzWDzM"
//const token = token;
//const tkn=getToken;
//console.log("Token from SS",token.token)
//console.log("Token", tkn)

export default function Results() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, setToken } = useToken();

  console.log("Token in Results",{token})

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endPoint,
          {
            method: "GET",
            //withCredentials: true,
            //credentials: 'include',
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${token}`,
                //'Access-Control-Allow-Credentials':'true',
                'Access-Control-Allow-Credentials':'true',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                 //'Accept' : 'application/json',
            }
              //,body: JSON.stringify(data),
          });
          console.log("Fetch response:",response)
          console.log("Token in Results desp get",{token}) 
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }else console.log("Fetch response:",response.ok)
        let actualData = await response.json();
        setData(actualData);
        setError(null);
        console.log("data length from API:",Object.keys(actualData).length);
        console.log(data);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [data])

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, genre,description}) => (
            <li key={id}>
              <h3>{genre}:</h3> {description}
            </li>
          ))}
      </ul>
    </div>
  );
}