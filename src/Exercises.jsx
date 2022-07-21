import React, { useState } from 'react'
import Exercise from './Exercise'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import ExerciseForm from './ExerciseForm'

function Exercises({ exercises }) {

  const [name, setName] = useState("")
  const [muscle, setMuscle] = useState("")
  const [category, setCategory] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")

  const [showForm, setShowForm] = useState(false)

    const renderExercises = exercises.map((exercise) => {
        return (
          <Exercise key={exercise.id} exercise={exercise}/>
        )
    })

    function showExerciseForm(){
      setShowForm((showForm) => !showForm)
    }


  return (
    <Box textAlign='center'>
    <h1>Exercises</h1>
    <Button variant="contained" size="small" align="center" onClick={showExerciseForm}>Add Exercise</Button>
    { showForm ? <ExerciseForm name={name} setName={setName} muscle={muscle} setMuscle={setMuscle} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }

    <div>{renderExercises}</div>
    </Box>
  )
}

export default Exercises;