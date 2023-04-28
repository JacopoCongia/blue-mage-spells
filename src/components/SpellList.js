import useSpellsData from "@/hooks/use-spells-data";
import Spell from "./Spell";

function SpellList({ filteredSpells }) {
  const { selectSpell } = useSpellsData();

  const spellsElement = filteredSpells.map((spell) => {
    const isSelected = spell.owned === true ? "opacity-25" : "";

    return (
      <Spell
        key={spell.id}
        spell={spell}
        textOnHover="Add to My Spells"
        onClick={() => selectSpell(spell)}
        isSelected={isSelected}
      />
    );
  });

  return (
    <div className="p-5">
      <table className="w-[100%]">
        <thead>
          <tr className="text-left border-b-2 border-neutral-200 dark:border-neutral-700">
            <th className="py-2">#</th>
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
