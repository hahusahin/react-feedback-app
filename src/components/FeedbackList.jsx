import {useContext} from "react"
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"
import spinner from "../assets/loadingSpinner.gif"

function FeedbackList() {

  const {feedbacks, isLoading} = useContext(FeedbackContext);
  
  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <h1>No Feedbacks Yet</h1>;
  }

  return isLoading 
    ? (<img src={spinner} alt="Loading..." style={{width:"100px", margin:"auto", display:"block"}}/>) 
    : (<div className="feedback-list">
        <AnimatePresence> 
          {feedbacks.map((feedback) => ( 
            <motion.div   // simple fade in fade out animation
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FeedbackItem
                key={feedback.id}
                feedback={feedback}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      )
}

export default FeedbackList;
