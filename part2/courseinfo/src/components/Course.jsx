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

export default Course