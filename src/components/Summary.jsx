import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );
  const wrongAnswer = userAnswers.length - skippedAnswer.length - correctAnswer.length;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Quiz completeted!" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{Math.round((skippedAnswer.length / userAnswers.length) * 100)}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{Math.round((correctAnswer.length / userAnswers.length) * 100)}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{Math.round((wrongAnswer / userAnswers.length) * 100)}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((userAnswer, userAnswerIndex) => {
          let cssClass = "user-answer";

          if (userAnswer === null) {
            cssClass += " skipped";
          } else if (userAnswer === QUESTION[userAnswerIndex].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={userAnswerIndex}>
              <h3>{userAnswerIndex + 1}</h3>
              <p className="question">{QUESTION[userAnswerIndex].text}</p>
              <p className={cssClass}>{userAnswer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
