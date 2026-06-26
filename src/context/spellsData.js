import { createContext, useState, useEffect, useRef, useMemo } from "react";
import oldData from "@/data";

const SpellsDataContext = createContext();

function SpellsDataProvider({ children }) {
  const [spells, setSpells] = useState(() =>
    [...oldData].sort((a, b) => a.order - b.order),
  );
  const [filteredSpells, setFilteredSpells] = useState(() =>
    [...oldData].sort((a, b) => a.order - b.order),
  );
  const [savedSpells, setSavedSpells] = useState([oldData[0]]);
  const [theme, setTheme] = useState(false);
  const [selected, setSelected] = useState({ category: "all" });
  const [searchField, setSearchField] = useState(false);

  const changed = useRef(false);
  const isMounted = useRef(false);

  const missingSpells = useMemo(() => {
    return spells.filter(
      ({ id: id1 }) => !savedSpells.some(({ id: id2 }) => id2 === id1),
    );
  }, [spells, savedSpells]);

  const includeOnly = (name) => {
    if (name === "all") {
      setFilteredSpells(spells);
    } else if (name === "missing") {
      setFilteredSpells(missingSpells);
    } else if (name === "new") {
      const onlyNewSpells = spells.filter((s) => {
        return s.patch === "6.45";
      });
      setFilteredSpells(onlyNewSpells);
    } else if (name === "dungeon" || name === "trial" || name === "raid") {
      const updatedList = spells.filter((spell) =>
        spell.sources.some(
          (el) => el.type.toLowerCase() === name.toLowerCase(),
        ),
      );
      setFilteredSpells(updatedList);
    }
  };

  // Function to select all spells
  const selectAll = () => {
    if (savedSpells.length === spells.length) {
      setSavedSpells([oldData[0]]);
    } else setSavedSpells(spells);
    changed.current = true;
  };

  // Function to add or remove a spell from savedSpells
  const selectSpell = (spell) => {
    setSavedSpells((prevSaved) => {
      const isSaved = prevSaved.some((el) => el.id === spell.id);
      if (!isSaved) {
        return [...prevSaved, spell];
      } else {
        return prevSaved.filter((element) => element.id !== spell.id);
      }
    });
    changed.current = true;
  };

  const owned = (spell) => {
    return savedSpells.some((el) => el.id === spell.id);
  };

  useEffect(() => {
    const getMergedSpells = async () => {
      // Set up our cache rules (24 hours in milliseconds)
      const CACHE_KEY = "ffxiv_spells_cache";
      const CACHE_EXPIRY = 24 * 60 * 60 * 1000;

      try {
        // Check if we have a valid cache first
        const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
        const now = Date.now();

        if (
          cachedData &&
          cachedData.timestamp &&
          now - cachedData.timestamp < CACHE_EXPIRY
        ) {
          // Cache is valid! Use it and skip the API call entirely
          setSpells(cachedData.spells);
          setFilteredSpells(cachedData.spells);

          let spellList = JSON.parse(localStorage.getItem("savedSpells"));
          if (spellList && spellList.length > 0) {
            setSavedSpells(spellList);
          } else {
            setSavedSpells([cachedData.spells[0]]);
          }
          return; // Exit the function here so we don't fetch
        }

        // If no cache or the cache is expired, fetch the live data
        const response = await fetch("https://ffxivcollect.com/api/spells");
        const json = await response.json();
        const liveSpells = json.results;

        // Loop through your old data and ONLY update the images/icons
        const mergedSpells = oldData
          .map((oldSpell) => {
            const matchingLiveSpell = liveSpells.find(
              (live) => live.id === oldSpell.id,
            );

            return {
              ...oldSpell,
              icon: matchingLiveSpell ? matchingLiveSpell.icon : oldSpell.icon,
              image: matchingLiveSpell
                ? matchingLiveSpell.image
                : oldSpell.image,
            };
          })
          .sort((a, b) => a.order - b.order);

        // Save the newly merged data to localStorage with a timestamp
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: now,
            spells: mergedSpells,
          }),
        );

        setSpells(mergedSpells);
        setFilteredSpells(mergedSpells);

        // Handle user's saved spells
        let spellList = JSON.parse(localStorage.getItem("savedSpells"));
        if (spellList && spellList.length > 0) {
          setSavedSpells(spellList);
        } else {
          setSavedSpells([mergedSpells[0]]);
        }
      } catch (error) {
        console.error("Error fetching live spells:", error);

        // Fallback to oldData if the API is down
        const fallbackSpells = [...oldData].sort((a, b) => a.order - b.order);
        setSpells(fallbackSpells);
        setFilteredSpells(fallbackSpells);
      }
    };

    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setTheme(JSON.parse(storedTheme));
    }

    getMergedSpells();
  }, []);

  // Save spells when they change
  useEffect(() => {
    if (changed.current) {
      localStorage.setItem("savedSpells", JSON.stringify(savedSpells));
    }
  }, [savedSpells]);

  // Save theme ONLY when the user actually changes it
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("darkMode", JSON.stringify(theme));
    } else {
      isMounted.current = true; // Mark as mounted after the first render
    }
  }, [theme]);

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
    setSelected,
  };

  return (
    <SpellsDataContext.Provider value={valuesToShare}>
      {children}
    </SpellsDataContext.Provider>
  );
}

export { SpellsDataProvider };
export default SpellsDataContext;
