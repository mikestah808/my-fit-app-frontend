import './App.css';
import React, { useEffect, useState } from 'react';
import HomePage from './HomePage';
import NavBar from './Navbar'
import CardContainer from './CardContainer';

const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + '/workouts')
    .then((resp) => resp.json())
    .then((workoutData) => setWorkouts(workoutData))
  }, []) 







  return (
    <div>
     <NavBar />
     <HomePage />
     <CardContainer workouts = {workouts}/>
    </div>
  );
}

export default App;
