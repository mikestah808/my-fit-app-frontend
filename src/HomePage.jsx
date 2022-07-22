import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

function HomePage({ setWorkouts, workouts }) {

  const [showForm, setShowForm] = useState(false)

  const [title, setTitle] = useState("")
  const [level, setLevel] = useState("")

  const [editWorkout, setEditWorkout] = useState({})


  function createWorkoutForm(){
    setShowForm((showForm) => !showForm)
  }

  function onCreateWorkout(newWorkout){
    const addNewWorkout=[...workouts, newWorkout]
    setWorkouts(addNewWorkout);
  }

  function handleEditButtonClick(selectedWorkout){
    setEditWorkout(selectedWorkout)
  }

 function onUpdateWorkout(updatedWorkout){
  // check to see if the workout.id matches with the updatedWorkout.id
  //if it does, then return the updatedWorkout object, if not, then keep workout 
  const updateWorkout = workouts.map((workout) => workout.id === updatedWorkout.id ? updatedWorkout : workout)
  setWorkouts(updateWorkout)
 }


  function onDeleteWorkout(deletedWorkoutId){
    const filterWorkouts = workouts.filter((workout) => workout.id !== deletedWorkoutId)  
    setWorkouts(filterWorkouts)
  }

  return (
    <div>
        <h1>MY FIT Workout Tracker</h1>
        <Box textAlign='center'>
            <Button variant='contained' size="small" onClick={createWorkoutForm}>
                Add Workout
            </Button>
        </Box>
        { showForm ? <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} onCreateWorkout={onCreateWorkout} title={title} setTitle={setTitle} level={level} setLevel={setLevel}/> : null }
        <WorkoutList editWorkout={editWorkout} setEditWorkout={setEditWorkout} workouts={workouts} onDeleteWorkout={onDeleteWorkout} handleEditButtonClick={handleEditButtonClick} onUpdateWorkout={onUpdateWorkout} setTitle={setTitle} setLevel={setLevel}/>
    </div>
  )
}

export default HomePage;