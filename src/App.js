import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './Navbar'
import WorkoutDetail from './WorkoutDetail';


const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])
  const [search, setSearch] = useState("")
  const [click, setClick] = useState(false)
  const [toggle, setToggle] = useState(false)


  function pointlessButton(){
    setClick(!click)
  }

  function toggleButton(){
    setToggle(!toggle)
  }

useEffect(() => {
  fetch(BASE_URL + '/workouts')
  .then((resp) => resp.json())
  .then((workoutData) => {
    setWorkouts(workoutData)
  })
}, [click, toggle])

const filterWorkouts = workouts.filter((workout) => workout.title.toLowerCase().includes(search.toLowerCase()))
  

  return (
    <BrowserRouter>
     <NavBar search={search} setSearch={setSearch}/>
     <Routes>
        <Route exact path="/" element={ <HomePage toggleButton={toggleButton} workouts={filterWorkouts} search={search} setWorkouts={setWorkouts}/> }/>
        <Route path="/workouts/:id" element={ <WorkoutDetail workouts={workouts} setWorkouts={setWorkouts} pointlessButton={pointlessButton}/> }/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;