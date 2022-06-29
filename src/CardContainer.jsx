import WorkoutCard from './WorkoutCard';
import React from 'react'
import { render } from '@testing-library/react';
// import { render } from '@testing-library/react';

function CardContainer({ workouts, onDeleteWorkout }) {

    const renderWorkouts = workouts.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} onDeleteWorkout={onDeleteWorkout}/>
    })




  return (
    <div>
       {renderWorkouts}
    </div>
  )
}

export default CardContainer;