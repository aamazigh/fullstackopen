const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumulator, currentValue) => {
      return (accumulator + currentValue.exercises)
    }, 0
  )

  return (
    <p><b>Total of {sum} exercises</b></p>
  )
}

const Part = ( { parts } ) => {
    return (
        parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
    )
  }

const Content = ({ parts }) => 
  <>
    <Part parts={parts} />
  </>
    
const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} /> 
    </>
  )
} 

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App