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
    { id: "missing", title: "Missing" }
  ];

  return (
    <div className="flex justify-evenly items-center bg-indigo-400 dark:bg-indigo-900 p-5">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      <div className="mx-5">
        <RadioSelector config={config} />
      </div>
      <button
        onClick={selectAll}
        className="mr-auto whitespace-nowrap h-[40px] px-[14px] bg-neutral-100 text-neutral-800 dark:text-neutral-100 hover:bg-indigo-100 dark:hover:bg-indigo-400 rounded dark:bg-neutral-800"
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
