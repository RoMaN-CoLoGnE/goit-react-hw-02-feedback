import s from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.Statistics}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p className={s.PositiveFeedback}>
      Positive Feedback: {positivePercentage}%
    </p>
  </div>
);

export default Statistics;
