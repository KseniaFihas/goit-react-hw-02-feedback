import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  updateState = nameFeedback => {
    this.setState(oldData => {
      let obj = { ...oldData };


      obj[nameFeedback] = oldData[nameFeedback] + 1;
      return obj;
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      ((this.state.good) / (this.state.good + this.state.neutral + this.state.bad))*100 || 0
    );
  };




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
    </div>
  );
};
