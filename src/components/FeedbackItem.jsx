import Card from "./shared/Card"
import { FaTrash, FaEdit } from "react-icons/fa"
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({feedback}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="black"/>
      </button>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTrash color="black"/>
      </button>
      <div className="text-display">{feedback.review}</div>      
    </Card>
  );
}

export default FeedbackItem;
