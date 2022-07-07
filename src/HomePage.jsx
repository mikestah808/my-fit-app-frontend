import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardList from './CardList';
import WorkoutForm from './WorkoutForm';
// import { create } from '@mui/material/styles/createTransitions';

function HomePage({ setWorkouts, workouts, search }) {

  const [showForm, setShowForm] = useState(false)



  function onDeleteWorkout(deletedWorkout){
    const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkout)  
    setWorkouts(filterWorkouts)
  }

  function createWorkoutForm(){
    // return <WorkoutForm />
    setShowForm((showForm) => !showForm)
    //create function which will make a form appear 
    //the form will consist of a title, date, and level input box
    //the values of input will be tied to state 
    //the setter function will be chained to a onChange event handler 
  }


const searchWorkouts = workouts.filter((workout) => workout.title.toLowerCase().includes(search.toLowerCase()))



  return (
    <div>
        <h1>Welcome to MY FIT! The best workout tracker out there!</h1>
        <Box textAlign='center'>
            <Button variant='contained' onClick={createWorkoutForm}>
                Create Workout
            </Button>
        </Box>
        { showForm ? <WorkoutForm workouts={workouts} setWorkouts={setWorkouts}/> : null }
        <CardList workouts={searchWorkouts} onDeleteWorkout={onDeleteWorkout}/>
    </div>
  )
}

export default HomePage;