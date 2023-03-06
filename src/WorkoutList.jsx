import Workout from './Workout';
import React from 'react'

function WorkoutList({ workouts, editWorkout, setEditWorkout, onDeleteWorkout, handleEditButtonClick, onUpdateWorkout, setTitle, setLevel}) {
  

    const renderWorkouts = workouts.map((workout) => {
        return <Workout key={workout.id} workout={workout} onDeleteWorkout={onDeleteWorkout} setEditWorkout={setEditWorkout} handleEditButtonClick={handleEditButtonClick} editWorkout={editWorkout} onUpdateWorkout={onUpdateWorkout} setTitle={setTitle} setLevel={setLevel}/>
    })
    

  return (
    <div>
       {renderWorkouts}
    </div>
  )
}

export default WorkoutList;