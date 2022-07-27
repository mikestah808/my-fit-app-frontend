import React from 'react'
import Exercise from './Exercise'
// import { Button } from '@mui/material';
import { Box } from '@mui/system';
// import ExerciseForm from './ExerciseForm'

function Exercises({ exercises, onDeleteExercise }) {


  // const [name, setName] = useState("")
  // const [category, setCategory] = useState("")
  // const [sets, setSets] = useState("")
  // const [reps, setReps] = useState("")

  // const [showForm, setShowForm] = useState(false)

    const renderExercises = exercises.map((exercise) => {
      // debugger;
        return (
          <Exercise key={exercise.id} {...exercise} onDeleteExercise={onDeleteExercise} />
        )
    })

    // function showExerciseForm(){
    //   setShowForm((showForm) => !showForm)
    // }



  return (
    <Box textAlign='center'>
    <h1>Exercises</h1>
    <div>{renderExercises}</div>
    {/* { showForm ? <ExerciseForm onCreateExercise={onCreateExercise} workout={workout} name={name} setName={setName} category={category} setCategory={setCategory} sets={sets} setSets={setSets} reps={reps} setReps={setReps}/> : null }
    <Exercises workout={selectedWorkout} exercises={selectedWorkout.exercises} setExercises={setExercises} onCreateExercise={onCreateExercise} onDeleteExercise={onDeleteExercise}/> */}
    </Box>
  )
}

export default Exercises;