import { useState } from "react";
import useSpellsData from "@/hooks/use-spells-data";

function SpellSearch({ spells, setFilteredSpells }) {
  const { searcField, setSearchField } = useSpellsData();
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value);
    if (!event.target.value) {
      setFilteredSpells(spells);
      setSearchField(false);
    } else {
      setSearchField(true);
    }

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
        className="w-[300px] rounded border-none h-[39px] px-3 text-black bg-blue-50 focus:outline-none"
        onChange={handleSearchChange}
        value={term}
        placeholder="Search by number or name..."
      ></input>
    </form>
  );
}

export default SpellSearch;
