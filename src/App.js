import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './Navbar'
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ExerciseList from './ExerciseList';


const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(BASE_URL + '/workouts')
    .then((resp) => resp.json())
    .then((workoutData) => setWorkouts(workoutData))
  }, []) 

  const filterWorkouts = workouts.filter((workout) => workout.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <BrowserRouter>
     <NavBar search={search} setSearch={setSearch}/>
     <Routes>
        <Route path="/" element={ <HomePage workouts={filterWorkouts} search={search} setWorkouts={setWorkouts}/> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/exercises" element={ <ExerciseList /> }/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
