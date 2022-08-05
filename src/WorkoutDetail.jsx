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
      //debugger;
      const findWorkout = workouts.find(workout => workout.id === parseInt(id))
      if (findWorkout){
        setSelectedWorkout(findWorkout)
      }
    }, [workouts])


  function showExerciseForm(){
    setShowForm((showForm) => !showForm)
  }

function onCreateExercise(newExercise){
    // debugger;
    const newExercises = [...selectedWorkout.exercises, newExercise]
    // go through all the workouts 
    //changing the exercises of that one workout once it is found 
    //have to let workouts know about this new exercise
    const newWorkouts = workouts.map((workout) => workout.id === newExercise.id ? [...workouts, {selectedWorkout, exercises: newExercises}] : workout)
    // const newWorkouts = workouts.map((workout) => workout.id == newExercise.id ? [...workouts, {selectedWorkout, exercises: newExercises}] : workout)
    setSelectedWorkout({...selectedWorkout, exercises: newExercises})
    setWorkouts(newWorkouts)
  }

function onDeleteExercise(deletedExerciseId){
  //when delete button is clicked, function will return exercise.id NOT EQUAL to deletedExerciseId
  const filterExercises = selectedWorkout.exercises.filter((exercise) => exercise.id !== deletedExerciseId)  
  setSelectedWorkout({...selectedWorkout, exercises: filterExercises})
  //have to let workouts know about this deleted exercise
  // const newWorkouts = workouts.map((workout) => workout.id == deletedExerciseId ? [...workout, {selectedWorkout, exercises: filterExercises}] : workout)
  // setWorkouts(newWorkouts)
}

  return (
    <Box textAlign='center'>
    <Button variant="contained" size="small" align="center" onClick={showExerciseForm}>Add Exercise</Button>
    { showForm ? <ExerciseForm pointlessButton={pointlessButton} workout={selectedWorkout} onCreateExercise={onCreateExercise} name={name} setName={setName} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }
    {/* {selectedWorkout.exercises.length > 0 ? <Exercises workout={selectedWorkout} onDeleteExercise={onDeleteExercise}/> : null} */}
     <Exercises workout={selectedWorkout} onDeleteExercise={onDeleteExercise}/>
    </Box >
  )
}

export default WorkoutDetail;


//state must change in WorkoutDetail component 
//too many props being passed down, instead should just have state so it changes and re-renders on page 