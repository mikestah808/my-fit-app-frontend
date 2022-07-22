import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Exercise({ exercise, onDeleteExercise }) {

  const { name, category, sets, reps } = exercise



  function handleDeleteClick() {
    fetch(`http://localhost:9292/exercises/${exercise.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(() => {
        onDeleteExercise(exercise.id)
      })
  }


  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Category: {category}
        </Typography>
        <Typography variant="h5" component="div">
           {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Sets: {sets} Reps: {reps}
        </Typography>
        <br/>
        <Button size="small" onClick={handleDeleteClick}>Delete</Button>
      </CardContent>
    </Card>
    </>
  );
}


export default Exercise;