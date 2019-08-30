import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TopHeader from "./intro";
import Header from "./header";
import NasaImage from "./picture";
import { MainDiv, HeaderDiv } from "./containers"
import { thisExpression } from "@babel/types";

function App() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState('2019-08-26');

  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date-${date}`)
  //     .then(response => {
  //       console.log(response)
  //       setTitle(response.data.title)
  //       setLink(response.data.url)
  //       setExplanation(response.data.explanation)
  //       setDate(response.data.date)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className="App">

      <TopHeader/>
      <form>
          <input onChange={(event) => setDate(event.target.value)} type='date'></input>
      </form>

      <MainDiv>
        <NasaImage title={title} url={link} explanation={explanation} />
      </MainDiv>
      
      <HeaderDiv>
        <Header link="https://www.nasa.gov/" website="www.nasa.com" />
      </HeaderDiv>
    </div>
  );
}

export default App;
