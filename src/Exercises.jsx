import React from 'react'
import Exercise from './Exercise'
import { Box } from '@mui/system';

function Exercises({ workout, onDeleteExercise }) {

    const renderExercises = workout.exercises.map((exercise) => {
        return (
          <Exercise key={exercise.id} {...exercise} onDeleteExercise={onDeleteExercise} />
        )
    })

  
  return (
    <Box textAlign='center'>
    <h1>Exercises</h1>
    <div>{renderExercises}</div>
    </Box>
  )
}

export default Exercises;