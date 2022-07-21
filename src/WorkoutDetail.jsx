import React from 'react'
import Exercises from './Exercises';
import { useParams } from 'react-router-dom';

function WorkoutDetail({ workouts, setExercises, exercises }) {


  // Get the userId param from the URL.
  const { id } = useParams();

    
const selectedWorkout = workouts.filter(workout => workout.id == id)

// function onCreateExercise(newExercise){
//   const addNewExercise = [...exercises, newExercise]
//   setExercises(addNewExercise)
// }

// const printTitle = filterWorkouts.map((workout) => workout.title)
const renderExercises = selectedWorkout.map((workout) => {

  return (
    <Exercises workout={workout} key={workout.id} exercises={workout.exercises} setExercises={setExercises}/>
  )
})


  return (
    <div>{renderExercises}</div>
  )
}

export default WorkoutDetail;