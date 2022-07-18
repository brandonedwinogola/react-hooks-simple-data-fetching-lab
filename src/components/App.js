// create your App component here
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    let [dogImage, setDogImage] = useState(null)
    const [ firstLoaded, isLoaded ] =useState(false)
}

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogImage(data.message))
},[])

if (!isLoaded) return <p>Loading...</p>;

<div>
        <img src={imageUrl} alt="A random dog" />
      </div>

export default App;