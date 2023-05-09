import s from './Feedback.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={s.Title}>{title}</h2>
    {children}
  </section>
);

export default Section;
