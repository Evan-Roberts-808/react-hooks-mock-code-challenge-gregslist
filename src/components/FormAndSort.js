import React, {useState} from 'react'

function Form({onNew, onSort, sort}) {

    const initialForm = {
        'description': '',
        'image': '',
        'location': ''
    }

    const [form, setForm] = useState(initialForm)


    function handleChange(e) {
        setForm({...form, [e.target.name] : e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(newListing => {
            onNew(newListing)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" id="desciption" placeholder="Enter description..." value={form.description} onChange={handleChange}/>
            <input type="text" name="image" id ="image" placeholder="Enter image url..." value={form.image} onChange={handleChange}/>
            <input type="text" name="location" id="location" placeholder="Enter location..." value={form.location} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>

        <label>Sort Alphabetically: </label><input type="checkbox" name="sort" id="sort"  value={sort} onClick={onSort}/>
    
    </div>
  )
}

export default Form