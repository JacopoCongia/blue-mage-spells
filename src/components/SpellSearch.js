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

    const updatedSpells = spells.filter(
      (spell) =>
        spell.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        spell.order === parseInt(event.target.value)
    );
    setFilteredSpells(updatedSpells);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[300px] rounded p-2 text-black bg-blue-50 focus:outline-none"
        onChange={handleSearchChange}
        value={term}
        placeholder="Search by number or name..."
      ></input>
    </form>
  );
}

export default SpellSearch;