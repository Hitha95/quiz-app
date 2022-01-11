import "./answer.css";
import { Link } from "react-router-dom";

const Answer = ({ currentQuiz, answers }) => {
  const allQuestions = currentQuiz.questions;
  let count = 0;
  let skipped = 0;
  let score = 0;
  allQuestions.forEach((item) => {
    answers.forEach((answer) => {
      if (item.id === answer.questionId) {
        if (item.correctChoice === answer.choiceId) {
          count++;
        } else if (answer.choiceId === "") {
          skipped++;
        }
      }
    });
  });
  score = parseInt((count * 100) / 7);

  let statement = "";
  return (
    <div className="answers-container">
      <h3 className="quiz-name">{currentQuiz.category}</h3>
      <h4 style={score <= 50 ? { color: "#bf464d" } : { color: "#bcc761" }}>
        Score: {score}%
      </h4>
      <h4>Total questions : {allQuestions.length}</h4>
      <h4>Correct answers : {count}</h4>
      <h4>Skipped questions : {skipped}</h4>
      <h4 style={{ color: "#bd7f55", padding: "0.8rem 0 0.6rem" }}>
        Check your Answers
      </h4>
      <div className="answers-list">
        {allQuestions.map((question) => {
          let chosen = answers.find((ans) => {
            return ans.questionId === question.id;
          });
          if (chosen.choiceId === question.correctChoice) {
            statement = "Yippes It's right..!";
          } else if (chosen.choiceId === "") {
            statement = "Oooh you skipped this one!";
          } else {
            statement = "Sorry you got it wrong";
          }
          return (
            <div className="answer-card-container" key={question.id}>
              <h4>Question {question.id}</h4>
              <p>{question.question}</p>
              <div className="answer-container">
                {question.choices.map((choice) => {
                  return (
                    <button
                      key={choice.id}
                      className={
                        choice.id === question.correctChoice
                          ? "answer-item-correct"
                          : choice.id === chosen.choiceId &&
                            choice.id !== question.correctChoice
                          ? "answer-item-wrong"
                          : "answer-item"
                      }
                    >
                      {choice.text}
                    </button>
                  );
                })}
              </div>
              <p className="conditional-text">
                <i>{statement}</i>
              </p>
            </div>
          );
        })}
      </div>

      <Link to="/">
        <button className="btn-go-back" style={{ marginBottom: "8vh" }}>
          Go back to home page
        </button>
      </Link>
    </div>
  );
};

export default Answer;
