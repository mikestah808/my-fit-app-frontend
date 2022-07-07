import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './Navbar'
import Signup from './authentication/Signup';
import Login from './authentication/Login';


const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(BASE_URL + '/workouts')
    .then((resp) => resp.json())
    .then((workoutData) => setWorkouts(workoutData))
  }, []) 


  // create function that deletes workout and updates json data 
  // create delete request 

  // function onDeleteWorkout(deletedWorkout){
  //   const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkout)  
  //   setWorkouts(filterWorkouts)
  // }

  //create new workout

  // function onCreateWorkout(){

  // }

  //view exercises within workout card when view button is clicked!!!!



  //edit workout 

  // function onEditWorkout(){
    
  // }







  return (
    <BrowserRouter>
     <NavBar search={search} setSearch={setSearch}/>
     <Routes>
        <Route path="/" element={ <HomePage workouts={workouts} search={search} setWorkouts={setWorkouts}/> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/signup" element={ <Signup /> }/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
