import Workout from './Workout';
import React from 'react'

function WorkoutList({ workouts, editWorkout, setEditWorkout, onDeleteWorkout, handleEditButtonClick, onUpdateWorkout}) {


    const renderWorkouts = workouts.map((workout) => {
        return <Workout key={workout.id} workout={workout} onDeleteWorkout={onDeleteWorkout} setEditWorkout={setEditWorkout} handleEditButtonClick={handleEditButtonClick} editWorkout={editWorkout} onUpdateWorkout={onUpdateWorkout}/>
    })

    // how do i grab the even.target.value within the search input??
    // create state because the inpout value will dynamically change 
    // for the search box, there should be an onChange event handler and also the value set to state 

  return (
    <div>
       {renderWorkouts}
    </div>
  )
}

export default WorkoutList;