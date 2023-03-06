import React, { useState, useEffect } from 'react'
import Exercises from './Exercises';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ExerciseForm from './ExerciseForm'
import { Box } from '@mui/system';


function WorkoutDetail({ workouts, setWorkouts, pointlessButton }) {

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
      const findWorkout = workouts.find(workout => workout.id === parseInt(id))
      if (findWorkout){
        setSelectedWorkout(findWorkout)
      }
    }, [workouts])


  function showExerciseForm(){
    setShowForm((showForm) => !showForm)
  }

function onCreateExercise(newExercise){
    const newExercises = [...selectedWorkout.exercises, newExercise]
    const newWorkouts = workouts.map((workout) => workout.id === newExercise.id ? [...workouts, {selectedWorkout, exercises: newExercises}] : workout)
    setSelectedWorkout({...selectedWorkout, exercises: newExercises})
    setWorkouts(newWorkouts)
  }

function onDeleteExercise(deletedExerciseId){
  const filterExercises = selectedWorkout.exercises.filter((exercise) => exercise.id !== deletedExerciseId)  
  setSelectedWorkout({...selectedWorkout, exercises: filterExercises})
}

  return (
    <Box textAlign='center'>
    <Button variant="contained" size="small" align="center" onClick={showExerciseForm}>Add Exercise</Button>
    { showForm ? <ExerciseForm pointlessButton={pointlessButton} workout={selectedWorkout} onCreateExercise={onCreateExercise} name={name} setName={setName} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }
     <Exercises workout={selectedWorkout} onDeleteExercise={onDeleteExercise}/>
    </Box >
  )
}

export default WorkoutDetail;
 