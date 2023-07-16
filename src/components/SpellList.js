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
            <th className="py-2 text-[1.5rem] sm:text-[1rem] w-[5%]">#</th>
            <th className="w-[10%]"></th>
            <th className="w-[25%] text-left pl-[1em] text-[1.5rem] sm:text-[1rem] lg:w-[15%]">
              Name
            </th>
            <th className="w-[75%] text-left pl-[1em] text-[1.5rem] sm:text-[1rem] lg:w-[25%]">
              Learned From
            </th>
            <th className="text-left pl-[1em] hidden lg:table-cell">
              Description
            </th>
            <th className="w-[5%] text-left pl-[2em] hidden lg:table-cell">
              Rating
            </th>
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
