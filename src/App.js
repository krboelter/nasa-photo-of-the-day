import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import NasaImage from "./picture";
import { MainDiv, HeaderDiv } from "./containers"

function App() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState("");

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
      <HeaderDiv>
        <Header link="https://www.nasa.com" website="www.nasa.com" />
      </HeaderDiv>

      <div>
        <h1>Nasa Photo of the Day</h1>
        <p>Below is a picture and a description taken by NASA. Check back tomorrow for a new NASA picture!</p>
      </div>

      <MainDiv>
        <NasaImage title={title} url={link} explanation={explanation} />
      </MainDiv>
    </div>
  );
}

export default App;
