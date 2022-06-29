import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './Navbar'

const BASE_URL = "http://localhost:9292"

function App() {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + '/workouts')
    .then((resp) => resp.json())
    .then((workoutData) => setWorkouts(workoutData))
  }, []) 


  // create function that deletes workout and updates json data 
  // create delete request 
  function onDeleteWorkout(deletedWorkout){
    const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkout.id)  
    setWorkouts(filterWorkouts)
  }

  //create new workout

  // function onCreateWorkout(){

  // }

  //view exercises within workout card when view button is clicked!!!!



  //edit workout 

  // function onEditWorkout(){
    
  // }







  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
     <Route path="/" element={ <HomePage onDeleteWorkout={onDeleteWorkout} workouts={workouts}/> }/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
