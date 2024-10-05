import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
        number: newNumber,
        id: persons.length + 1 
      }

      setPersons(persons.concat(personOjbect))
      setNewPerson('')
      setNewNumber('')

    }
  }

  const handleNameChange = (event) => { 
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => { 
    setNewNumber(event.target.value)
  }
  
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredPersons = persons.filter( person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with 
        <input value={newFilter} onChange={handleNewFilter} />
      </div>
      
       
      <h2>Add a new</h2>

      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newPerson}
            onChange={handleNameChange}
          />
        </div>

        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    
      {filteredPersons.map(person => {
        return (
          <p key={person.id}>{person.name} {person.number}</p>
        )
      })}
        
      {/* {persons.map(person => {
        return (
          <p key={person.id}>{person.name} {person.number}</p>
        )})} */}
    </div>
  )
}

export default App