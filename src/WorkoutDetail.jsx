import React, { useState, useEffect } from 'react'
import Exercises from './Exercises';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ExerciseForm from './ExerciseForm'
import { Box } from '@mui/system';

const BASE_URL = "http://localhost:9292"



function WorkoutDetail({ workouts, setWorkouts}) {

    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")

    const [selectedWorkout, setSelectedWorkout] = useState({
      exercises: []
    })
   
  // Get the userId param from the URL.
    const { id } = useParams();


  useEffect(() => {
    const findWorkout = workouts.find(workout => workout.id == id)
    setSelectedWorkout(findWorkout)
  }, [])


  function showExerciseForm(){
    setShowForm((showForm) => !showForm)
  }

function onCreateExercise(newExercise){
    // debugger;
    const newExercises = [...selectedWorkout.exercises, newExercise]
    setSelectedWorkout({...selectedWorkout, exercises: newExercises})
  }

function onDeleteExercise(deletedExerciseId){
  //when delete button is clicked, function will return exercise.id NOT EQUAL to deletedExerciseId
  const filterExercises = selectedWorkout.exercises.filter((exercise) => exercise.id !== deletedExerciseId)  
  setSelectedWorkout({...selectedWorkout, exercises: filterExercises})
}

  return (
    <Box textAlign='center'>
    <Button variant="contained" size="small" align="center" onClick={showExerciseForm}>Add Exercise</Button>
    { showForm ? <ExerciseForm workout={selectedWorkout} onCreateExercise={onCreateExercise} name={name} setName={setName} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }
    <Exercises workout={selectedWorkout} onDeleteExercise={onDeleteExercise}/>
    </Box >
  )
}

export default WorkoutDetail;


//state must change in WorkoutDetail component 
//too many props being passed down, instead should just have state so it changes and re-renders on page 