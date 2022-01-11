import "./quiz.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuestions } from "../../context/questions/QuestionsContext";
import Modal from "react-modal";
import Answer from "../../Components/Answer/Answer";

const Quiz = () => {
  const { quizId } = useParams();
  const data = useQuestions();

  const currentQuiz = data.find((item) => {
    return item.quizId === quizId;
  });

  const [allQuestions, setAllQuestions] = useState(currentQuiz.questions);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionId, setQuestionId] = useState("1"); //current question Id on screen

  let defaultAnswers = allQuestions.map((question) => {
    return { questionId: question.id, choiceId: "" };
  });

  const [answers, setAnswers] = useState(defaultAnswers); //{question, choice}
  const [answersPageView, setAnswersPageView] = useState(false); //answer page ui

  const currentQuestion = allQuestions[questionId - 1];

  const handleNext = () => {
    setQuestionId(parseInt(questionId) + 1);
  };

  const handlePrevious = () => {
    setQuestionId(parseInt(questionId) - 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmitQuiz = () => {
    setAnswersPageView(true);
    closeModal();
  };

  return (
    <>
      <Modal
        className="submit-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="confirm-form">
          <h3>Are you sure?</h3>
          <p>
            Please review your questions and make sure you've answers on all of
            them! There is no going back!
          </p>
          <div>
            <button className="button btn-primary" onClick={closeModal}>
              Go back
            </button>
            <button className="button btn-secondary" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          </div>
        </div>
      </Modal>
      {answersPageView ? (
        <Answer currentQuiz={currentQuiz} answers={answers} />
      ) : (
        <>
          <div className="quiz-container">
            <h3 className="quiz-name">{currentQuiz.category}</h3>
            <div className="question-container">
              <h4>
                Question {questionId}/{allQuestions.length}
              </h4>
              <p>
                {questionId}) {currentQuestion.question}
              </p>
              <div className="choices-container">
                {currentQuestion.choices.map((item) => {
                  const handleChoiceSelection = (choiceId) => {
                    let result = answers.map((answer) => {
                      if (answer.questionId === currentQuestion.id) {
                        return {
                          questionId: currentQuestion.id,
                          choiceId: choiceId,
                        };
                      } else {
                        return answer;
                      }
                    });
                    setAnswers(result);
                  };
                  let selected = answers.find((answer) => {
                    return (
                      answer.questionId === currentQuestion.id &&
                      answer.choiceId === item.id
                    );
                  });
                  return (
                    <button
                      key={item.id}
                      className={
                        selected !== undefined && selected.choiceId === item.id
                          ? "selected"
                          : "choice-item"
                      }
                      onClick={() => {
                        handleChoiceSelection(item.id);
                      }}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
              <div className="button-container">
                {parseInt(questionId) === 1 ? (
                  <button className="button btn-primary " onClick={handleNext}>
                    Next
                  </button>
                ) : parseInt(questionId) === allQuestions.length ? (
                  <>
                    <button
                      className="button btn-primary "
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button
                      className="button btn-secondary"
                      onClick={() => setModalIsOpen(true)}
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button btn-primary"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button className="button btn-primary" onClick={handleNext}>
                      Next
                    </button>
                  </>
                )}
              </div>
            </div>
            <h4>Finish quiz</h4>
            <div className="submit">
              <button
                className="button btn-secondary"
                onClick={() => setModalIsOpen(true)}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
