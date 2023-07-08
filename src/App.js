import React, { useState } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import data from './Components/Data';
import Heading from './Components/Heading';
import Refresh from './Components/Refresh';

function App() {
  const [allCities, setCities] = useState(data);

  function removeHandler(id) {
    const filteredCities = allCities.filter((city) => city.id !== id);
    setCities(filteredCities);
  }

  function refreshHandler() {
    setCities(data);
  }

  return (
    <>
      <Heading />
      {allCities.length === 0 ? (
        <Refresh refreshHandler={refreshHandler} />
      ) : (
        <LandingPage cities={allCities} removeCity={removeHandler} />
      )}
    </>
  );
}

export default App;
