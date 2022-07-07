import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardList from './CardList';
import WorkoutForm from './WorkoutForm';
// import { create } from '@mui/material/styles/createTransitions';

function HomePage({ setWorkouts, workouts, search }) {

  const [form, setForm] = useState(false)


  function onDeleteWorkout(deletedWorkout){
    const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkout)  
    setWorkouts(filterWorkouts)
  }

  function createWorkout(){
    // return <WorkoutForm />
    setForm((form) => !form)
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
            <Button variant='contained' onClick={createWorkout}>
                Create Workout
            </Button>
        </Box>
        { form ? <WorkoutForm /> : null }
        <CardList workouts={searchWorkouts} onDeleteWorkout={onDeleteWorkout}/>
    </div>
  )
}

export default HomePage;