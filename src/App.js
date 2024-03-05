
import React, { useState } from "react";
import Navebar from "./component/navebar"
import { Container } from "react-bootstrap";
import Headmenu from "./component/headmenu";
import Listmenu from "./component/listmenu";
import CardsMenu from "./component/cardsMenu";
import {Data} from "./component/data";
function App() {
  const allcatigry = [ "الكل", ...new Set(Data.map((ele)=> ele.title))]
  console.log(allcatigry)
  const [dataItems, setdataItems]= useState(Data);
  //filtr by catigory
  const filterItems = (title)=> {
    if (title === "الكل") {
      setdataItems(Data)
    } else {
      const arr = Data.filter((item)=> item.title === title)
      setdataItems(arr)
    }
  }
  const filtersearch = (word)=> {
    if (word !== "") {
      const arr = Data.filter((item)=> item.title === word.indexOf())
      setdataItems(arr)
    } else {
     
    }
  }
  return (
    <div >
       <Navebar filtersearch = {filtersearch}/>
       <Container>
         
        <Headmenu/>
        <Listmenu filterItems = {filterItems} allcatigry = {allcatigry} />
        <CardsMenu dataItems={dataItems}/>

       </Container>
       
    </div>
  );
}

export default App;
