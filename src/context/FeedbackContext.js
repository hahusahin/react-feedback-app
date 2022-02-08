import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [editingFeedback, setEditingFeedback] = useState({
    feedback: {},
    isEdit: false
  })

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4() // give a unique id to new feedback
    setFeedbacks([newFeedback, ...feedbacks])
  }

  function deleteFeedback(id){
    if(window.confirm("Are you sure you want to delete?")){
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
  }

  function editFeedback(clickedFeedback){
    setEditingFeedback({
      feedback: clickedFeedback,
      isEdit: true
    });
  }

  function updateFeedback(id, updatedFeedback){
    setFeedbacks(feedbacks.map( feedback => ( feedback.id === id ? {id, ...updatedFeedback} : feedback )))
    setEditingFeedback({feedback:{}, isEdit: false})
  }

  return (
    <FeedbackContext.Provider value={{ 
          feedbacks, editingFeedback, 
          addFeedback, deleteFeedback, editFeedback, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext