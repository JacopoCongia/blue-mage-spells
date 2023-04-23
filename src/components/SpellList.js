import Spell from "./Spell";

function SpellList({ filteredSpells }) {
  const spellsElement = filteredSpells.map((spell) => {
    return (
      <Spell
        key={spell.id}
        spell={spell}
      />
    );
  });

  return <div>{spellsElement}</div>;
}

export default SpellList;
