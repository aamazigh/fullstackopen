const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
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
        parts.map(part => {
        return <p key={part.id}>{part.name} {part.exercises}</p>
        }
      )
    )
} 
  

const Content = ({ parts }) => 
  <>
    <Part parts={parts} />
  </>
    
const Course = ({courses}) => {
  return (
    <div>
    {courses.map(course => 
      <div key={course.id}>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )}
    </div>
    )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div id={Math.random()}>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App