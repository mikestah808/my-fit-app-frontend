import WorkoutCard from './WorkoutCard';
import React from 'react'

function CardList({ workouts, onDeleteWorkout, onUpdateWorkout, title, setTitle, date, setDate, level, setLevel}) {

    const renderWorkouts = workouts.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} onDeleteWorkout={onDeleteWorkout} title={title} setTitle={setTitle} date={date} setDate={setDate} level={level} setLevel={setLevel}/>
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

export default CardList;