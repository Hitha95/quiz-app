import "./quiz-card.css";
import { Link } from "react-router-dom";

const QuizCard = ({ item }) => {
  const { quizId, category, categoryImage, questions } = item;
  return (
    <Link to={`/quiz/${quizId}`}>
      <div className="quiz-card">
        <img src={categoryImage} alt={category} />
        <div>
          <h3>{category}</h3>
          <h4>{questions.length}</h4>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
