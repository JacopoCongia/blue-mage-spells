import { createContext, useState, useEffect, useRef } from "react";
import data from "@/data";
import fetchSpells from "@/fetchSpells";

const SpellsDataContext = createContext();

function SpellsDataProvider({ children }) {
  const [spells, setSpells] = useState(
    data.sort((a, b) => {
      return a.order - b.order;
    })
  );
  const [filteredSpells, setFilteredSpells] = useState(
    data.sort((a, b) => {
      return a.order - b.order;
    })
  );
  const [savedSpells, setSavedSpells] = useState([data[0]]);
  const [theme, setTheme] = useState(false);
  const [selected, setSelected] = useState({ category: "all" });
  const [searchField, setSearchField] = useState(false);

  const changed = useRef(false);

  const missingSpells = spells.filter(
    ({ id: id1 }) => !savedSpells.some(({ id: id2 }) => id2 === id1)
  );

  fetchSpells();

  const includeOnly = (name) => {
    if (name === "all") {
      setFilteredSpells(spells);
    } else if (name === "missing") {
      setFilteredSpells(missingSpells);
    } else if (name === "dungeon" || "trial" || "raid") {
      const updatedList = spells.filter((spell) =>
        spell.sources.some((el) => el.type.toLowerCase() === name.toLowerCase())
      );
      setFilteredSpells(updatedList);
    }
  };

  const selectAll = () => {
    if (savedSpells.length === spells.length) {
      setSavedSpells([data[0]]);
    } else setSavedSpells(spells);
    changed.current = true;
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
    changed.current = true;
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
    if (spellList !== [data[0]] && spellList !== null) {
      setSavedSpells(spellList);
    }
    if (darkMode !== false) {
      setTheme(darkMode);
    }
  }, []);

  useEffect(() => {
    if (changed.current) {
      localStorage.setItem("savedSpells", JSON.stringify(savedSpells));
    }
    localStorage.setItem("darkMode", JSON.stringify(theme));
  }, [savedSpells, theme]);

  useEffect(() => {
    if (selected.category !== "all") {
      setSelected((prevSelected) => {
        return { ...prevSelected, category: "all" };
      });
    }
  }, [searchField]);

  const valuesToShare = {
    spells,
    filteredSpells,
    savedSpells,
    setFilteredSpells,
    theme,
    setTheme,
    selectSpell,
    includeOnly,
    owned,
    selectAll,
    searchField,
    setSearchField,
    selected,
    setSelected
  };

  return (
    <SpellsDataContext.Provider value={valuesToShare}>
      {children}
    </SpellsDataContext.Provider>
  );
}

export { SpellsDataProvider };
export default SpellsDataContext;
