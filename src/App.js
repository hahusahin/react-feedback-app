import { useState } from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats";

function App() {

  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function handleDelete(id){
    if(window.confirm("Are you sure you want to delete?")){
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks={feedbacks} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default App;
