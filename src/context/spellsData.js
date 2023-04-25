import { createContext, useState, useEffect } from "react";
import fetchSpells from "@/fetchSpells";

const SpellsDataContext = createContext();

function SpellsDataProvider({ children }) {
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [theme, setTheme] = useState(false);

  const retrieveSpells = async () => {
    const result = await fetchSpells();

    setSpells(result);
    setFilteredSpells(result);
  };

  useEffect(() => {
    retrieveSpells();
    // let spellList = JSON.parse(localStorage.getItem("customList"));

    // setCustomList(spellList);
  }, []);

  const valuesToShare = {
    spells,
    filteredSpells,
    setFilteredSpells,
    theme,
    setTheme
  };

  return (
    <SpellsDataContext.Provider value={valuesToShare}>
      {children}
    </SpellsDataContext.Provider>
  );
}

export { SpellsDataProvider };
export default SpellsDataContext;
