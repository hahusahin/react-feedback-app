import { useState } from 'react';
import RatingSelector from './RatingSelector';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm({handleAdd}) {
  
  const [review, setReview] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5)

  const handleReviewChange = (event) => {

    const currentText = event.target.value;
    setReview(currentText)

    if (currentText === ""){ // nothing has typed yet
      setBtnDisabled(true)
      setMessage(null)
    } else if (currentText.trim().length <= 10) {  // something is typed but not enough
      setBtnDisabled(true)
      setMessage("You should enter at least 10 characters!")
    } else {  // Review is enough to be submitted
      setBtnDisabled(false)
      setMessage(null)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newFeedback = { review, rating }
    handleAdd(newFeedback)

    setReview("")
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your experience with us?</h2>
        <RatingSelector rating={rating} setRating={setRating}/>
        <div className="input-group">
          <input 
            onChange={handleReviewChange}
            placeholder='Write a review'
            value={review}
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;
