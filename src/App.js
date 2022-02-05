import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {

  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function handleAdd(newFeedback) {
    newFeedback.id = uuidv4() // give a unique id to new feedback
    setFeedbacks([newFeedback, ...feedbacks])
  }

  function handleDelete(id){
    if(window.confirm("Are you sure you want to delete?")){
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={handleAdd}/>
        <FeedbackStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks={feedbacks} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default App;
