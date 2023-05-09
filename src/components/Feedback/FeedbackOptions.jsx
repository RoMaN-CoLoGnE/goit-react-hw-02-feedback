import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.ButtonWrapper}>
    {options.map(option => (
      <button
        key={option}
        className={s.Button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
