import { useEffect, useState } from "react";
import fetchSpells from "@/fetchSpells";
import SpellSearch from "@/components/SpellSearch";
import SpellList from "@/components/SpellList";

export default function Home() {
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);

  const retrieveSpells = async () => {
    const result = await fetchSpells();

    setSpells(result);
    setFilteredSpells(result);
  };

  useEffect(() => {
    retrieveSpells();
  }, []);

  return (
    <div>
      <SpellSearch
        spells={spells}
        setFilteredSpells={setFilteredSpells}
      />
      <SpellList filteredSpells={filteredSpells} />
    </div>
  );
}
