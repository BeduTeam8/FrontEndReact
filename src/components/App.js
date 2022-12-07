//import React from 'react';
import Banner from "./banner";
import DataList from "./dataList";

const listEndPoints=
['','category','book','author','editorial','review','order',
'users','users/signUp','users/logIn','library','rol']

const indexEndPoint=3;
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