const Header = (props) => { 
  return (
    <h1>
      {props.name}
    </h1> 
  )
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partName1} exercises={props.exercises1} />
      <Part partName={props.partName2} exercises={props.exercises2} />
      <Part partName={props.partName3} exercises={props.exercises3} />
    </div>
  )
};

const Part = (props) => { 
  return (
    <p>
      {props.partName} {props.exercises}
    </p> 
  )
};
// Refactor Content component so that it doesn't render anything by itself. Instead it only renders 3 Part components 
// Part renders the name and number of exercises of one part
// Content renders e.g. <Part partName={partX} exercises={exercisesX} />

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exc1 + props.exc2 + props.exc3}
    </p>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  
  return (
    <div>
      <Header name={course.name} />
      <Content 
        partName1={course['parts'][0].name} exercises1={course['parts'][0].exercises}
        partName2={course['parts'][1].name} exercises2={course['parts'][1].exercises} 
        partName3={course['parts'][2].name} exercises3={course['parts'][2].exercises} 
      />
      <Total exc1={course['parts'][0].exercises} exc2={course['parts'][1].exercises} exc3={course['parts'][2].exercises} />
    </div>
  )
};

export default App