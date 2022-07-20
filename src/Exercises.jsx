import React from 'react'
import Exercise from './Exercise'

function Exercises({ exercises }) {

    console.log("exercises", exercises)

    const renderExercises = exercises.map((exercise) => {
        return (
          <Exercise key={exercise.id} exercise={exercise}/>
        )
    })

  return (
    <>
    <h1>Exercises</h1>
    <div>{renderExercises}</div>
    </>
  )
}

export default Exercises;