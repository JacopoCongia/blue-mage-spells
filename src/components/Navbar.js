import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";

import SpellSearch from "./SpellSearch";
import useSpellsData from "@/hooks/use-spells-data";

function Navbar() {
  const { spells, setFilteredSpells, theme, setTheme } = useSpellsData();

  return (
    <div className="flex items-center bg-indigo-400 dark:bg-indigo-900 p-5 py-7">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      {!theme ? (
        <div className="flex items-center gap-2 ml-auto">
          <FaSun className="text-white text-xl" />
          <BsToggleOff
            onClick={() => setTheme(!theme)}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
      ) : (
        <div className="flex items-center gap-3 ml-auto">
          <FaMoon className="text-white text-lg" />
          <BsToggleOn
            onClick={() => setTheme(!theme)}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
