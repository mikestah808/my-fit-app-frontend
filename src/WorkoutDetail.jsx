import React, { useState, useEffect } from 'react'
import Exercises from './Exercises';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ExerciseForm from './ExerciseForm'
import { Box } from '@mui/system';

function WorkoutDetail({ workouts, exercises, setExercises }) {

    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")
    const [click, setClick] = useState(false)

    const [workout, setWorkout] = useState({})
    const [selectedWorkoutExercises, setSelectedWorkoutExercises] = useState([])

    //go through array of exercises using .find 
    //for each exercise, return exercises where exercise workout_id == workout.id
    

    // const findExercises = exercises.find((exercise) => exercise.workout_id == workout.id)

  // Get the userId param from the URL.
  const { id } = useParams();


  useEffect(() => {
    // debugger;
    const findWorkout = workouts.find(w => w.id == id)
    setWorkout(findWorkout)
  }, [id, selectedWorkoutExercises])

  useEffect(() => {
    // debugger;
    const findWorkoutExercises = exercises.filter(exercise => exercise.workout_id == id)
    setSelectedWorkoutExercises(findWorkoutExercises)
  }, [id, click])

  console.log("workout",workout)
   console.log("selected workout", selectedWorkoutExercises);

  // returns an ARRAY of OBJECTS
  //state is initially set to an OBJECT with KEY of EXERCISE with empty ARRAY
  // console.log("selected workout", selectedWorkout)


  function showExerciseForm(){
    setShowForm((showForm) => !showForm)
  }

  // console.log("selected workout exercises", selectedWorkout.exercises)

function onCreateExercise(newExercise){
  // debugger;
    // const findWorkout = workouts.find(workout => workout.id == id)
    // setSelectedWorkout(findWorkout, newExercise)
    const addNewExercise = [...selectedWorkoutExercises, newExercise]
    console.log("add new exercise", addNewExercise)
    setSelectedWorkoutExercises(addNewExercise)
}

function onDeleteExercise(deletedExerciseId){
  const filterExercises = exercises.filter((exercise) => exercise.id !== deletedExerciseId)  
  setSelectedWorkoutExercises(filterExercises)
}

// console.log("selected workout", selectedWorkout.id)

  return (
    <Box textAlign='center'>
    <Button variant="contained" size="small" align="center" onClick={showExerciseForm}>Add Exercise</Button>
    { showForm ? <ExerciseForm click={click} setClick={setClick} workout={workout} exercises={selectedWorkoutExercises} onCreateExercise={onCreateExercise} name={name} setName={setName} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }
    <Exercises exercises={selectedWorkoutExercises} setExercises={setExercises} onDeleteExercise={onDeleteExercise}/>
    </Box >
  )
}

export default WorkoutDetail;


//state must change in WorkoutDetail component 
//too many props being passed down, instead should just have state so it changes and re-renders on page 