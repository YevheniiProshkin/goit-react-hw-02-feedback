// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = feedback =>
    this.setState(prev => {
      return { [feedback]: prev[feedback] + 1 };
    });

  // --- Працюючий варіант!

  // onBtnClick = feedback => {
  //   if (feedback === 'good') {
  //     this.setState(prev => {
  //       return { good: prev.good + 1 };
  //     });
  //   }
  //   if (feedback === 'neutral') {
  //     this.setState(prev => {
  //       return { neutral: prev.neutral + 1 };
  //     });
  //   }
  //   if (feedback === 'bad') {
  //     this.setState(prev => {
  //       return { bad: prev.bad + 1 };
  //     });
  //   }
  // };

  // --- B this.setState ми не звертаєся напряму до стейту!

  // onBtnClick = feedback => {
  //   if (feedback === 'good') {
  //     this.setState({ good: this.state.good + 1 });
  //   }
  //   if (feedback === 'neutral') {
  //     this.setState({ neutral: this.state.neutral + 1 });
  //   }
  //   if (feedback === 'bad') {
  //     this.setState({ bad: this.state.bad + 1 });
  //   }
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
  }
}
