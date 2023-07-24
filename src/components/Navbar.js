import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import RadioSelector from "./RadioSelector";
import SpellSearch from "./SpellSearch";
import useSpellsData from "@/hooks/use-spells-data";

function Navbar() {
  const { spells, setFilteredSpells, savedSpells, theme, setTheme, selectAll } =
    useSpellsData();
  const config = [
    { id: "all", title: "All" },
    { id: "dungeon", title: "Dungeon" },
    { id: "raid", title: "Raid" },
    { id: "trial", title: "Trial" },
    { id: "missing", title: "Missing" },
    { id: "new", title: "*New*" }
  ];

  return (
    <div className="p-[1.5em] flex gap-5 justify-around items-center bg-indigo-400 dark:bg-indigo-900">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      <RadioSelector config={config} />
      <button
        onClick={selectAll}
        className="
          md:mr-auto 
          py-[0.5em] 
          px-[5em]
          md:px-[2em]
          rounded 
          whitespace-nowrap
          bg-neutral-100
          dark:bg-neutral-800
          text-neutral-800 
          dark:text-neutral-100 
          hover:bg-indigo-100 
          dark:hover:bg-indigo-400 
        "
      >
        {savedSpells.length === spells.length ? "Deselect All" : "Select All"}
      </button>
      <div className="">
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
    </div>
  );
}

export default Navbar;
