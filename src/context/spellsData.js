import { createContext, useState, useEffect } from "react";
import data from "@/data";

const SpellsDataContext = createContext();

function SpellsDataProvider({ children }) {
  const [spells, setSpells] = useState(data);
  const [filteredSpells, setFilteredSpells] = useState(data);
  const [savedSpells, setSavedSpells] = useState([]);
  const [theme, setTheme] = useState(false);

  const includeOnly = (name) => {
    if (name === "all") {
      setFilteredSpells(spells);
      // } else if (name === "saved") {
      //   setFilteredSpells(savedSpells);
    } else if (name === "dungeon" || "trial" || "raid") {
      const updatedList = spells.filter((spell) =>
        spell.sources.some((el) => el.type.toLowerCase() === name.toLowerCase())
      );
      setFilteredSpells(updatedList);
    }
  };

  const selectSpell = (spell) => {
    const saved = savedSpells.some((el) => el.id === spell.id);
    if (!saved) {
      setSavedSpells((prevSavedSpells) => {
        return [...prevSavedSpells, spell];
      });
    } else {
      const removedSpell = savedSpells.filter(
        (element) => element.id !== spell.id
      );
      setSavedSpells(removedSpell);
    }
  };

  const owned = (spell) => {
    if (
      spells.some((el) => el.id === spell.id) &&
      savedSpells.some((el) => el.id === spell.id)
    ) {
      return true;
    }
  };

  useEffect(() => {
    let spellList = JSON.parse(localStorage.getItem("savedSpells"));
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (spellList !== []) {
      setSavedSpells(spellList);
    }
    if (darkMode !== false) {
      setTheme(darkMode);
    }
  }, []);

  useEffect(() => {
    if (savedSpells.length > 0) {
      localStorage.setItem("savedSpells", JSON.stringify(savedSpells));
    }
    localStorage.setItem("darkMode", JSON.stringify(theme));
  }, [savedSpells, theme]);

  const valuesToShare = {
    spells,
    filteredSpells,
    setFilteredSpells,
    theme,
    setTheme,
    selectSpell,
    includeOnly,
    owned
  };

  return (
    <SpellsDataContext.Provider value={valuesToShare}>
      {children}
    </SpellsDataContext.Provider>
  );
}

export { SpellsDataProvider };
export default SpellsDataContext;
