import { useContext } from "react";
import SpellsDataContext from "@/context/spellsData";

function useSpellsData() {
  return useContext(SpellsDataContext);
}

export default useSpellsData;
