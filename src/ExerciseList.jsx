import React from 'react'
import Exercise from './Exercise'

function ExerciseList({ exercises }) {

    const renderExercises = exercises.map((exercise) => {
        return <Exercise key={exercise.id} {...exercise} /> 
    })


  return (
    <div>
        {renderExercises}
    </div>
  )
}

export default ExerciseList