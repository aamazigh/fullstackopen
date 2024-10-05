import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
   }
  ]) 
  const [newPerson, setNewPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    // Check whether name is already in the persons array of objects
    // Using the some() method of Array
    
    if (persons.some(person => person.name === newPerson))
    {
      alert(`${newPerson} is already added to the phonebook`)
    } else {

      const personOjbect = {
      name: newPerson,
      id: persons.length + 1 
      }
      setPersons(persons.concat(personOjbect))
      setNewPerson('')

    }
  }

  const handleNameChange = (event) => { 
    setNewPerson(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newPerson}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return (
          <p key={person.id}>{person.name}</p>
        )})}
    </div>
  )
}

export default App