import {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

  const {feedbacks} = useContext(FeedbackContext);
  
  if (!feedbacks || feedbacks.length === 0) {
    return <h1>No Feedbacks Yet</h1>;
  }

  return (
    <div className="feedback-list">
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
  );
}

export default FeedbackList;
