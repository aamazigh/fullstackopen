import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

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

  
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredPersons = persons.filter( person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
    
      <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
    
      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} 
        newPerson={newPerson} newNumber={newNumber} 
        setNewPerson={setNewPerson} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>
    
      <Persons persons={filteredPersons} />
    
      {/* {persons.map(person => {
        return (
          <p key={person.id}>{person.name} {person.number}</p>
        )})} */}
    </div>
  )
}

export default App