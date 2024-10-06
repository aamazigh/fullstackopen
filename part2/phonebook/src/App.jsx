import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

const hook = () => { 
       console.log('effect')    
       axios
         .get('http://localhost:3001/persons')
         .then(response => 
         {
           console.log('promise fulfilled')
           setPersons(response.data)
         })
  }
  
  useEffect(hook, [])

  
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