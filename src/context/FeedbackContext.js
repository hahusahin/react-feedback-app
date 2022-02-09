import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [editingFeedback, setEditingFeedback] = useState({
    feedback: {},
    isEdit: false
  })
  const [isLoading, setIsLoading] = useState(true)

  // load the feedbacks from backend for once 
  useEffect(() => {
    fetchFeedbacks()
  }, [])

  async function fetchFeedbacks(){ 
    try {
      const res = await fetch("/feedbacks/?_sort=id&_order=desc")
      const data = await res.json()
      setFeedbacks(data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  async function addFeedback(newFeedback) {
    try {
      const res = await fetch("/feedbacks", {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newFeedback)
      })
      const data = await res.json()
      setFeedbacks([data, ...feedbacks])
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteFeedback(id){
    if(window.confirm("Are you sure you want to delete?")){
      try {
        await fetch(`/feedbacks/${id}`, { method: 'DELETE' })
          //headers: {'Content-type': 'application/json'},
          //body: JSON.stringify(feedbacks.find(feedback => feedback.id === id))
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))        
      } catch (err) {
        console.log(err)
      }
    }
  }

  function editFeedback(clickedFeedback){
    setEditingFeedback({
      feedback: clickedFeedback,
      isEdit: true
    });
  }

  async function updateFeedback(id, updatedFeedback){
    try {
      const res = await fetch(`/feedbacks/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updatedFeedback)
      })
      const data = await res.json()
      setFeedbacks(feedbacks.map( feedback => ( feedback.id === id ? data : feedback )))
      setEditingFeedback({feedback:{}, isEdit: false})
    } catch (err) {
      console.log(err)
    }    
  }

  return (
    <FeedbackContext.Provider value={{ 
          feedbacks, editingFeedback, isLoading,
          addFeedback, deleteFeedback, editFeedback, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext