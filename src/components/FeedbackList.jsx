import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedbacks, handleDelete}) {

  if(!feedbacks || feedbacks.length === 0){
    return <h1>No Feedbacks Yet</h1>
  }

  return (
    <div className='feedback-list'>
      {feedbacks.map( feedback => (
        <FeedbackItem 
          key={feedback.id} 
          feedback={feedback}
          handleDelete={handleDelete}
          />
      ))}
    </div>);
}

export default FeedbackList;
