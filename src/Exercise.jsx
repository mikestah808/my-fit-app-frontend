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

function Exercise({ exercise }) {

  const { name, primary_muscle, category, sets, reps } = exercise


  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Category: {category}
        </Typography>
        <Typography variant="h5" component="div">
           Exercise: {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Sets: {sets} Reps: {reps}
        </Typography>
        <Typography variant="body2">
          Primary Muscle: {primary_muscle}
        </Typography>
        <br/>
        <Button size="small">Delete</Button>
      </CardContent>
    </Card>
    </>
  );
}


export default Exercise;