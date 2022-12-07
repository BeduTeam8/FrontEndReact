//import React from 'react';
import Banner from "./banner";
import DataList from "./dataList";

const listEndPoints=
//DO not require Token for GET and Get by ID (remeber to add /{id})
//Require Token for POST, 
//REquire Token for PUT and DEL (remeber to add /{id})
//0-6
["",'category','book','author','editorial','review','order',
//Require Token for all methods (GET/PUT/DEL remeber to add /{id})
//7-9
'users','library','rol',
//REquire Token and POST method
//11-12
'users/signUp','users/logIn',
//REquire token and and GET method
//13-14
'users/seach/atributos','users/search/rol/',
//REquire token and and POST method
//15-16
'library/create','author/create']

const indexEndPoint=7;
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