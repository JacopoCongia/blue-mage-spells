import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import RadioSelector from "./RadioSelector";
import SpellSearch from "./SpellSearch";
import useSpellsData from "@/hooks/use-spells-data";

function Navbar() {
  const { spells, setFilteredSpells, theme, setTheme } = useSpellsData();
  const config = [
    { id: "all", title: "All", position: "first" },
    { id: "dungeon", title: "Dungeon", position: "" },
    { id: "raid", title: "Raid", position: "" },
    { id: "trial", title: "Trial", position: "last" }
    // { id: "saved", title: "My Spells", position: "last" }
  ];

  return (
    <div className="flex justify-evenly items-center bg-indigo-400 dark:bg-indigo-900 p-5">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      <div className="mx-auto">
        <RadioSelector config={config} />
      </div>
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
