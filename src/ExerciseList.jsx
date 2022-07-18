import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import ExerciseForm from './ExerciseForm';


    function ExerciseList({ exercises }) {
      const [exerciseForm, setExerciseForm] = useState(false)

      function createWorkoutForm(){
        setExerciseForm((exerciseForm) => !exerciseForm)
      }


  return (
    <Box textAlign="center">
      <br/>
    <Button variant="contained" onClick={createWorkoutForm}>Add Exercise</Button>
    { exerciseForm ? <ExerciseForm/> : null }
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Primary Muscle</TableCell>
            <TableCell align="right">Cateogry</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Reps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercises.map((exercise) => (
            <TableRow
              key={exercise.id}
              {...exercise}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {exercise.name}
              </TableCell>
              <TableCell align="right">{exercise.primary_muscle}</TableCell>
              <TableCell align="right">{exercise.category}</TableCell>
              <TableCell align="right">{exercise.sets}</TableCell>
              <TableCell align="right">{exercise.reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}


export default ExerciseList;

