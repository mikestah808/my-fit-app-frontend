import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardList from './CardList';
import WorkoutForm from './WorkoutForm';
// import { create } from '@mui/material/styles/createTransitions';

function HomePage({ setWorkouts, workouts }) {

  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [level, setLevel] = useState("")



  function onDeleteWorkout(deletedWorkoutId){
    const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkoutId)  
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

  function onCreateWorkout(newWorkout){
    const addNewWorkout=[...workouts, newWorkout]
    setWorkouts(addNewWorkout);
  }

  function onUpdateWorkout(updatedWorkout){
    // 
  }



  return (
    <div>
        <h1>Welcome to MY FIT! The best workout tracker out there!</h1>
        <Box textAlign='center'>
            <Button variant='contained' onClick={createWorkoutForm}>
                Create Workout
            </Button>
        </Box>
        { showForm ? <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} onCreateWorkout={onCreateWorkout} title={title} setTitle={setTitle} date={date} setDate={setDate} level={level} setLevel={setLevel}/> : null }
        <CardList workouts={workouts} onDeleteWorkout={onDeleteWorkout} title={title} setTitle={setTitle} date={date} setDate={setDate} level={level} setLevel={setLevel} onUpdateWorkout={onUpdateWorkout}/>
    </div>
  )
}

export default HomePage;