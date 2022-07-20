import React from 'react'

function Exercise({ exercise }) {

    const {name} = exercise
    

  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default Exercise