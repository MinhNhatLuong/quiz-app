import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const quizIsComplete = QUESTIONS.length === userAnswers.length;
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);
  });

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}  />
    );
  }

  return (
    <div id="quiz">
      <Question
        questionIndex={activeQuestionIndex}
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
