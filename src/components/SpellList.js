import Spell from "./Spell";

function SpellList({ filteredSpells }) {
  const spellsElement = filteredSpells.map((spell) => {
    return (
      <Spell
        key={spell.id}
        spell={spell}
        textOnHover="Add to My Spells"
      />
    );
  });

  return (
    <div className="p-5">
      <table className="w-[100%] table-auto ">
        <thead>
          <tr className="text-left border-b-2 border-neutral-200 dark:border-neutral-700">
            <th>#</th>
            <th>Name</th>
            <th>Learned From</th>
          </tr>
        </thead>
        <tbody>{spellsElement}</tbody>
      </table>
    </div>
  );
}

export default SpellList;
