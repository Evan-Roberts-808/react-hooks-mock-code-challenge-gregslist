import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import FormAndSort from "./FormAndSort";

function App() {
  const [ listings, setListings ] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sort, setSort] = useState(false)

  let visibleListings = [...listings].filter((listing) => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(listings => {
      setListings(listings)
    })
  }, [])

  function handleDelete(deletedListing) {
    const updatedListings = [...listings].filter((listing) => listing.id !== deletedListing)
    setListings(updatedListings)
  }

  function handleSearch(search){
    setSearchTerm(search)
  }

  function handleNewListing(newListing){
    setListings([...listings, newListing])
  }

  function handleSort(){
    setSort(prevSort => !prevSort)
  }

  console.log(sort)

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <FormAndSort onNew={handleNewListing} onSort={handleSort} sort={sort}/>
      <ListingsContainer listings={visibleListings} onDelete={handleDelete} sort={sort}/>
    </div>
  );
}

export default App;
