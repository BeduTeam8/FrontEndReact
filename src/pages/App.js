//import React from 'react';
import Banner from "../components/banner";
import DataList from "../components/dataList";

const listEndPoints=
["",'category','book','author','editorial','review','order',
'users','users/signUp','users/logIn','library','rol']

const indexEndPoint=2;
const endPoint=listEndPoints[indexEndPoint];

const App = () => {
   return (
      <>
      <Banner>
         <div>LibraryVerse!</div>
      </Banner>
      <DataList endPoint={endPoint}/>
      </>
   );
};

export default App;