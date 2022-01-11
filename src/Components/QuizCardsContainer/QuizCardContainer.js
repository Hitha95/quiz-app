import "./quiz-card-container.css";
import { useQuestions } from "../../context/questions/QuestionsContext";
import QuizCard from "./QuizCard";

const QuizCardContainer = () => {
  const data = useQuestions();
  return (
    <div className="quizcard-container">
      {data.map((item) => {
        return <QuizCard key={item.quizId} item={item} />;
      })}
    </div>
  );
};

export default QuizCardContainer;
