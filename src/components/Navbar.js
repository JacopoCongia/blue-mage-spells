import { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";

import SpellSearch from "./SpellSearch";
import useSpellsData from "@/hooks/use-spells-data";

function Navbar() {
  const { spells, setFilteredSpells, theme, setTheme, includeOnly } =
    useSpellsData();

  const [checkBox, setCheckBox] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setCheckBox((prevCheckBox) => {
      return {
        ...prevCheckBox,
        category: value
      };
    });
    includeOnly(value);
  };

  // const handleClick = (category, event) => {
  //   includeOnly(category, event.target.id);
  // };

  return (
    <div className="flex items-center bg-indigo-400 dark:bg-indigo-900 p-5">
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      <div className="flex gap-2 ml-5">
        <fieldset className="text-neutral-100 flex">
          <div>
            <input
              className="peer hidden"
              type="radio"
              id="all"
              name="category"
              value="all"
              checked={checkBox.category === "all"}
              onChange={handleChange}
            />
            <label
              className="peer-checked:bg-blue-500 rounded-l border-l px-2 py-1 border-t border-b hover:bg-blue-400 cursor-pointer"
              htmlFor="all"
            >
              All
            </label>
          </div>
          <div>
            <input
              className="peer hidden"
              type="radio"
              id="dungeon"
              name="category"
              value="dungeon"
              checked={checkBox.category === "dungeon"}
              onChange={handleChange}
            />
            <label
              className="peer-checked:bg-blue-500 px-2 py-1 border-t border-b hover:bg-blue-400 cursor-pointer"
              htmlFor="dungeon"
            >
              Dungeons
            </label>
          </div>
          <div>
            <input
              className="peer hidden"
              type="radio"
              id="raid"
              name="category"
              value="raid"
              checked={checkBox.category === "raid"}
              onChange={handleChange}
            />
            <label
              className="peer-checked:bg-blue-500 px-2 py-1 border-t border-b hover:bg-blue-400 cursor-pointer"
              htmlFor="raid"
            >
              Raids
            </label>
          </div>
          <div>
            <input
              className="peer hidden"
              type="radio"
              id="trial"
              name="category"
              value="trial"
              checked={checkBox.category === "trial"}
              onChange={handleChange}
            />
            <label
              className="peer-checked:bg-blue-500 px-2 py-1 rounded-r border-r border-t border-b hover:bg-blue-400 cursor-pointer"
              htmlFor="trial"
            >
              Trials
            </label>
          </div>
        </fieldset>

        {/* <label htmlFor="dungeon">Dungeon</label> */}
        {/* <input
          type="checkbox"
          name="dungeon"
          checked={checkBox.dungeon}
          onChange={(e) => handleChange(e)}
          className="hover:bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-100 border text-neutral-700 rounded px-2 bg-neutral-200"
        />
        <label htmlFor="raid">Raid</label>
        <input
          type="checkbox"
          name="raid"
          checked={checkBox.raid}
          onChange={(e) => handleChange(e)}
          className="hover:bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-100 border text-neutral-700 rounded px-2 bg-neutral-200"
        />
        <label htmlFor="trial">Trial</label>
        <input
          type="checkbox"
          name="trial"
          checked={checkBox.trial}
          onChange={(e) => handleChange(e)}
          className="hover:bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-100 border text-neutral-700 rounded px-2 bg-neutral-200"
        /> */}
      </div>
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
