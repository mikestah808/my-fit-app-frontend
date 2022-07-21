import React from 'react'
import Exercise from './Exercise'
import { Button } from '@mui/material';
import { Box } from '@mui/system';

function Exercises({ exercises }) {

    console.log("exercises", exercises)

    const renderExercises = exercises.map((exercise) => {
        return (
          <Exercise key={exercise.id} exercise={exercise}/>
        )
    })

  return (
    <Box textAlign='center'>
    <h1>Exercises</h1>
    <Button size="small" align="center">Add Exercise</Button>
    <div>{renderExercises}</div>
    </Box>
  )
}

export default Exercises;