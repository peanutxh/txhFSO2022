import { useState } from 'react';

// Button should link to {setSelected} to set {selected} to random number, thereby returning a quote in anecdotes[i]
const Button = (props) => {
  return (
      <button onClick={props.onClick}> {props.text} </button>
  )
};

//rng but doesn't generate max 
const rng = (max) => {
  return Math.floor(Math.random() * max);
};

//returns index of highest value in an array
const indexOfMax = (arr) => {
  if (arr.length === 0) {
    console.log("array passed into indexOfMax has no elements");
    return -1;
  };

  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  };
  console.log("anecdote with highest upvotes, index", maxIndex);
  return maxIndex;
};

const AnecVote = ({text, count}) => {
  return (
    <> 
      <div>
        <p> {text} </p>
        <p> upvotes: {count} </p>
      </div>
    </>
  )
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState( Array(anecdotes.length).fill(0) );
  
  //setState is asynchronous >> can't see immediate updates
  const handleVoteClicks = () => {
    let newVote = [...votes][selected] + 1;
    setVotes(votes.fill(newVote, selected, selected+1));
    console.log("state has been updated for index", selected);
  };
  console.log(votes);

  return (
    <div>
      <h2> Anecdote of the day </h2>
      <AnecVote text={anecdotes[selected]} count={votes[selected]} />
      <Button text="vote" onClick={handleVoteClicks} />
      <Button text="Generate Random Anecdote" onClick={() => setSelected(rng(anecdotes.length))} />
      
      <h2> Anecdote with the most upvotes </h2>
      <AnecVote text={anecdotes[indexOfMax(votes)]} count={Math.max(...votes)} />
    </div>
  )
};

export default App;

