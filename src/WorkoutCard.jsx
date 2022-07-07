import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WorkoutCard({ workout, onDeleteWorkout }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/workouts/${workout.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((r) => r.json())
      .then((deletedWorkout) => onDeleteWorkout(deletedWorkout));
  }
  
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {workout.date}
        </Typography>
        <Typography variant="h5" component="div">
          {workout.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Difficulty: {workout.level}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
        <Button onClick={handleDeleteClick} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}


export default WorkoutCard;
