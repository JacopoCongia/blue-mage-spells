import useSpellsData from "@/hooks/use-spells-data";
import Spell from "./Spell";

function SpellList({ filteredSpells }) {
  const { spells, selectSpell, savedSpells } = useSpellsData();

  const spellsElement = filteredSpells.map((spell) => {
    return (
      <Spell
        key={spell.id}
        spell={spell}
        onClick={() => selectSpell(spell)}
      />
    );
  });

  return (
    <div className="p-5 text-[15px]">
      <table className="w-[100%] table-auto">
        <thead>
          <tr className="select-none border-b-2 border-neutral-200 dark:border-neutral-700">
            <th className="py-2 w-[40px]">#</th>
            <th></th>
            <th className="text-center">Name</th>
            <th className="text-center hidden sm:table-cell">Learned From</th>
            <th className="text-center hidden lg:table-cell">Description</th>
            <th className="text-center hidden lg:table-cell">Rating</th>
            <th className="hidden sm:table-cell whitespace-nowrap">
              {savedSpells.length} / {spells.length}
            </th>
          </tr>
        </thead>
        <tbody>{spellsElement}</tbody>
      </table>
    </div>
  );
}

export default SpellList;
