import { BsToggleOn, BsToggleOff } from "react-icons/bs";

import SpellSearch from "./SpellSearch";
import useSpellsData from "@/hooks/use-spells-data";

function Navbar() {
  const { spells, setFilteredSpells, theme, setTheme } = useSpellsData();

  return (
    <div className="flex items-center bg-indigo-400 dark:bg-indigo-900 p-5">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      {!theme ? (
        <BsToggleOff
          onClick={() => setTheme(!theme)}
          className="ml-auto text-white text-3xl cursor-pointer"
        />
      ) : (
        <BsToggleOn
          onClick={() => setTheme(!theme)}
          className="ml-auto text-white text-3xl cursor-pointer"
        />
      )}
    </div>
  );
}

export default Navbar;
