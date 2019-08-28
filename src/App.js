import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header";
import NasaImage from "./picture";

function App() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response)
        setTitle(response.data.title)
        setLink(response.data.url)
        setExplanation(response.data.explanation)
        setDate(response.data.date)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header nav="topnav" link="www.nasa.com" website="www.nasa.com" />
      <NasaImage title={title} url={link} explanation={explanation} />
    </div>
  );
}

export default App;
