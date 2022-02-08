import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelector from './RatingSelector'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
  
  const [review, setReview] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5)

  const {addFeedback, editingFeedback, updateFeedback} = useContext(FeedbackContext)

  // if editingFeedback is changed (a feedback's edit button is clicked) make these changes:
  useEffect(() => {
    if(editingFeedback.isEdit){ 
      setReview(editingFeedback.feedback.review)
      setRating(editingFeedback.feedback.rating)
      setBtnDisabled(false)
    }
  }, [editingFeedback]);

  const handleReviewChange = (event) => {

    const currentText = event.target.value
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
    
    if(editingFeedback.isEdit){
      updateFeedback(editingFeedback.feedback.id, newFeedback)
    } else {
      addFeedback(newFeedback)
    }    

    setReview("")
    setBtnDisabled(true)
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

export default FeedbackForm
