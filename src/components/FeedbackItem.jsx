import Card from "./shared/Card"
import { FaTrash } from "react-icons/fa"

function FeedbackItem({feedback, handleDelete}) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTrash color="black"/>
      </button>
      <div className="text-display">{feedback.text}</div>      
    </Card>
  );
}

export default FeedbackItem;
