import useSpellsData from "@/hooks/use-spells-data";

function Spell({ spell, textOnHover, ...rest }) {
  const { owned } = useSpellsData();

  const updatedDescription = spell.description.replaceAll("*", "");
  const selected = owned(spell) && "opacity-25";

  const updatedSources = spell.sources.map((source) => {
    return (
      <p
        className="my-1"
        key={source.text}
      >
        {source.text}
      </p>
    );
  });

  const rating = () => {
    let star = "";
    if (spell.rank === 1) {
      star = "★";
    } else if (spell.rank === 2) {
      star = "★★";
    } else if (spell.rank === 3) {
      star = "★★★";
    } else if (spell.rank === 4) {
      star = "★★★★";
    } else if (spell.rank === 5) {
      star = "★★★★★";
    } else return null;
    return star;
  };

  return (
    <>
      <tr
        {...rest}
        className={`hover:bg-indigo-200 
        dark:hover:bg-indigo-500 
        cursor-pointer border-b-2 
        border-neutral-200 dark:border-neutral-700 
        ${selected}`}
      >
        <td
          className="
          py-10 
          sm:py-5 
          text-center 
          text-[1.25rem] 
          sm:text-[1rem]"
        >
          {spell.order}
        </td>
        <td>
          <img
            className="min-w-[42px] pl-[2em]"
            src={spell.icon}
          />
        </td>
        <td className="text-left pl-[1em] font-medium text-[1.25rem] sm:text-[1rem]">
          {spell.name}
        </td>
        <td className="text-left pl-[1em] text-[1.25rem] sm:text-[1rem]">
          {updatedSources}
        </td>
        <td className="max-w-[350px] pl-[1em] text-left hidden lg:table-cell">
          {updatedDescription}
        </td>
        <td className="text-left pl-[2em] hidden lg:table-cell">{rating()}</td>
        <td></td>
      </tr>
    </>
  );
}

export default Spell;
