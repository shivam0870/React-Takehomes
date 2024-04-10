import React, { useState, useEffect } from "react";
import axios from "axios";

const DogPics = () => {
  const [breed, setBreed] = useState("Random");
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  const fetchRandomDogImage = async () => {
    let apiUrl = "https://dog.ceo/api/breeds/image/random";
    console.log(apiUrl);
    if (breed !== "Random") {
      apiUrl = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;
    }
    try {
      const response = await axios.get(apiUrl);
      setDogImage(response.data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
    fetchRandomDogImage();
  };

  const handleNextButtonClick = () => {
    fetchRandomDogImage();
  };

  return (
    <div>
      <h2>Dog Pics</h2>
      <select value={breed} onChange={handleBreedChange}>
        <option value="Random">Random</option>
        <option value="Beagle">Beagle</option>
        <option value="Boxer">Boxer</option>
        <option value="Dalmatian">Dalmatian</option>
        <option value="Husky">Husky</option>
      </select>
      <br />
      <img src={dogImage} alt="Dog" style={{ maxWidth: "300px" }} />
      <br />
      <button onClick={handleNextButtonClick}>Next</button>
    </div>
  );
};

export default DogPics;
