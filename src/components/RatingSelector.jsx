import React, { useState } from 'react';

function RatingSelector({rating, setRating}) {
  
  const handleChange = (event) => {
    setRating(+event.currentTarget.value)
  }
  
  return (
    // create list of numbers from 1 through 10
    <ul className='rating'>
      {Array.from({length: 10}, (_, i) => i + 1).map((num)=> (
        <li key={num}>
          <input            
            id={`num${num}`}
            type='radio'
            name='rating'
            value={num}
            onChange={handleChange}
            checked={rating === num}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
        )
      )}
    </ul>
  )
}

export default RatingSelector