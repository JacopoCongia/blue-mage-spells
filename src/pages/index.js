import useSpellsData from "@/hooks/use-spells-data";
import SpellList from "@/components/SpellList";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { filteredSpells, theme } = useSpellsData();

  const dark = theme ? "dark" : "";

  return (
    <div className={dark}>
      <div className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
        <Navbar />
        <SpellList filteredSpells={filteredSpells} />
      </div>
    </div>
  );
}
