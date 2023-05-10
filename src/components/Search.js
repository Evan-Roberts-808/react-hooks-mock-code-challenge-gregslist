import React, { useState } from "react";

function Search({onSearch}) {

  const [form, setForm] = useState("")

  function handleForm(e) {
    setForm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(form);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={handleForm}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
