import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.setFeedback(props.feedback + 1)}>
      {props.name}
    </button>
  )
}

const StatisticsLine = (props) => {
      return (
        <table style={{ width: '10%', align: 'left'}}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>{props.text}</td>
              <td style={{ width: '50%'}}>{props.value}</td>
            </tr>
          </tbody>
        </table>
      )
}

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>

      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.good + props.bad + props.neutral} />
      <StatisticsLine text="average" value={((props.good - props.bad)/(props.good + props.neutral + props.bad)).toFixed(1)} />
      <StatisticsLine text="positive" value={(props.good/(props.good + props.neutral + props.bad)*100).toFixed(1) + '%'} />
    </>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" feedback={good} setFeedback={setGood} />
      <Button name="neutral" feedback={neutral} setFeedback={setNeutral} />
      <Button name="bad" feedback={bad} setFeedback={setBad} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    
    </div>
  )
}

export default App