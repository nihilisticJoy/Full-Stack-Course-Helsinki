const Header = ({ course }) => {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ( { parts }) => {
  return(
    <div>
      {
        parts.map((part,index) => (
          <div key = {index}>
            <p>{part.name} {part.exercise}</p>
          </div>
        ))
      }

    </div>
  )

}
const Total = ( {parts} ) =>
{
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
   <div>
    <p>Total number of exercises: {totalExercises}</p>
   </div>
}

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

  return(
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
      </div>
  );
}

export default App