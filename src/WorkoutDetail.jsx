import React from 'react'
import Exercise from './Exercises';
import { useParams } from 'react-router-dom';

function WorkoutDetail({ workouts }) {

  // Get the userId param from the URL.
  const { id } = useParams();

    
const filterWorkouts = workouts.filter(workout => workout.id == id)

// console.log("filter workouts", filterWorkouts)

// const printTitle = filterWorkouts.map((workout) => workout.title)
const renderExercises = filterWorkouts.map((workout) => {

  return (
    <Exercise key={workout.id} exercises = {workout.exercises} />
  )
})


  return (
    <div>{renderExercises}</div>
  )
}

export default WorkoutDetail;