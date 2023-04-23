import { useState } from "react";

function SpellSearch({ spells, setFilteredSpells }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value);
    if (!event.target.value) return setFilteredSpells(spells);

    const updatedSpells = spells.filter((spell) =>
      spell.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredSpells(updatedSpells);
  };

  return (
    <form
      className="bg-blue-900 text-white p-5"
      onSubmit={handleSubmit}
    >
      <input
        className="border rounded p-2 text-black w-[100%] bg-blue-100"
        onChange={handleSearchChange}
        value={term}
        placeholder="Search spells..."
      ></input>
    </form>
  );
}

export default SpellSearch;
