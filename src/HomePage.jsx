import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContainer from './CardContainer';

function HomePage({ onDeleteWorkout, workouts }) {
  return (
    <div>
        <h1>Welcome to MY FIT! The best workout tracker out there!</h1>
        <Box textAlign='center'>
            <Button variant='contained'>
                Create Workout
            </Button>
            {/* <Button variant='contained'>
                Choose Workout
            </Button> */}
        </Box>
        <CardContainer workouts = {workouts} onDeleteWorkout={onDeleteWorkout}/>
    </div>
  )
}

export default HomePage