import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  calculateTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  calculatePositivePercentage = () => {
    const { good } = this.state;
    const total = this.calculateTotal();
    return total ? ((good / total) * 100).toFixed(2) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    const total = this.calculateTotal();
    const positivePercentage = this.calculatePositivePercentage();

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
