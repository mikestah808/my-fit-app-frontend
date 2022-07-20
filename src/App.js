import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './Navbar'
import Workout from './Workout';
import WorkoutDetail from './WorkoutDetail';
// import Exercise from './Exercise';
// import WorkoutList from './WorkoutList';


const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])
  const [exercises, setExercises] = useState([])
  const [search, setSearch] = useState("")

useEffect(() => {
  fetch(BASE_URL + '/workouts')
  .then((resp) => resp.json())
  .then((workoutData) => setWorkouts(workoutData))
}, [])
  

useEffect(() => {
    fetch(BASE_URL + '/exercises')
    .then((resp) => resp.json())
    .then((exerciseData) => setExercises(exerciseData))
  }, [])

  const filterWorkouts = workouts.filter((workout) => workout.title.toLowerCase().includes(search.toLowerCase()))



  return (
    <BrowserRouter>
     <NavBar search={search} setSearch={setSearch}/>
     <Routes>
        <Route path="/" element={ <HomePage workouts={filterWorkouts} search={search} setWorkouts={setWorkouts}/> }/>
        <Route path="/workouts/:id" element={ <WorkoutDetail workouts={workouts}/> }/>
        {/* <Route path="/workouts/:id/exercises" element={ <Exercise /> } /> */}
     </Routes>
    </BrowserRouter>
  );
}

export default App;
