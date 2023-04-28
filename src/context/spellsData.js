import { createContext, useState, useEffect } from "react";
// import fetchSpells from "@/fetchSpells";
import data from "@/data";

const SpellsDataContext = createContext();

function SpellsDataProvider({ children }) {
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [theme, setTheme] = useState(false);

  const includeOnly = (name) => {
    if (name !== "all") {
      const updatedList = spells.filter((spell) =>
        spell.sources.some((el) => el.type.toLowerCase() === name.toLowerCase())
      );
      setFilteredSpells(updatedList);
    } else setFilteredSpells(spells);
  };

  // const retrieveSpells = async () => {
  //   const result = await fetchSpells();

  //   const updatedSpells = result.map((spell) => {
  //     return { ...spell, owned: false };
  //   });
  //   setSpells(updatedSpells);
  //   setFilteredSpells(updatedSpells);
  // };

  const selectSpell = (spell) => {
    const selectedSpells = filteredSpells.map((el) => {
      if (el.id === spell.id) {
        return { ...el, owned: !spell.owned };
      } else return el;
    });
    setFilteredSpells(selectedSpells);
  };

  useEffect(() => {
    setSpells(data);
    setFilteredSpells(data);
    // let spellList = JSON.parse(localStorage.getItem("customList"));
    // setCustomList(spellList);
  }, []);

  const valuesToShare = {
    spells,
    filteredSpells,
    setFilteredSpells,
    theme,
    setTheme,
    selectSpell,
    includeOnly
  };

  return (
    <SpellsDataContext.Provider value={valuesToShare}>
      {children}
    </SpellsDataContext.Provider>
  );
}

export { SpellsDataProvider };
export default SpellsDataContext;
