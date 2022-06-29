import './App.css';
import React, { useEffect, useState } from 'react';
import HomePage from './HomePage';
import NavBar from './Navbar'
import CardContainer from './CardContainer';

const BASE_URL = "http://localhost:9292"

function App() {
  const [workout, setWorkout] = useState([])

  useEffect(() => {
    fetch(BASE_URL + '/workouts')
    .then((resp) => resp.json())
    .then((workouts) => console.log(workouts))
  }, []) 






  return (
    <div>
     <NavBar />
     <HomePage />
     <CardContainer />
    </div>
  );
}

export default App;
