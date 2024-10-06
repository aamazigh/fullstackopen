const PersonForm = ( {persons, setPersons, newPerson, newNumber, setNewNumber, setNewPerson} ) => {
    
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
    return (
        <div>
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
        </div>
)}

export default PersonForm