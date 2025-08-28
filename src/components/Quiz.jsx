import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const quizIsComplete = QUESTIONS.length === userAnswers.length;
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz completeted!" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={3000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
