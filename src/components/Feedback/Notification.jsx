import s from './Feedback.module.css';

const Notification = ({ message }) => (
  <p className={s.Notification}>{message}</p>
);

export default Notification;
