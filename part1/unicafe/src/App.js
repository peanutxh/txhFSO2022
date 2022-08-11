import { useState } from 'react';

const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>;

const statsTotal = (arr) => {
  let Sum = 0;
  for (let i = 0; i < arr.length ; i++) {
    Sum += arr[i];
  };
  return Sum;
};

const statsRatingAvg = (arr) => (arr[0] - arr[2]) / statsTotal(arr);

const statsRatingPositive = (arr) => (arr[0] / statsTotal(arr)) * 100 + '%';

const StatisticLine = ({text, value}) => (
  <tr> 
    <td> {text} </td> 
    <td> {value} </td> 
  </tr>
);

const Statistics = (props) => {
  if (props.valueGoodZero === 0 && props.valueNeutralZero === 0 && props.valueBadZero === 0) {
    return (
      <div>
        <p> No feedback has been given. </p> 
      </div>
    )
  } else {
    return (
      <table>
        <StatisticLine text="Good" value={props.valueGood} />
        <StatisticLine text="Neutral" value={props.valueNeutral} />
        <StatisticLine text="Bad" value={props.valueBad} />

        <StatisticLine text="Total" value={statsTotal(props.valueTotal)} /> 
        <StatisticLine text="Average" value={statsRatingAvg(props.valueAverage)}/> 
        <StatisticLine text="Positive" value={statsRatingPositive(props.valuePositive)}/> 
      </table>
    )
  }
};


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const ratingsArr = [good, neutral, bad];

  return (
    <div> 
      <h1> Give Feedback </h1>
      <Button text="Good" onClick={()=>setGood(good + 1)} />
      <Button text="Neutral" onClick={()=>setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={()=>setBad(bad + 1)} />

      <h2> Statistics </h2>
      <Statistics
        valueGoodZero={good} valueNeutralZero={neutral} valueBadZero={bad}
        valueGood={good}
        valueNeutral={neutral}
        valueBad={bad}
        valueTotal={ratingsArr}
        valueAverage={ratingsArr}
        valuePositive={ratingsArr}
      />
    </div>
  );
};

export default App;