function Spell({ spell, textOnHover, isSelected, ...rest }) {
  const updatedDescription = spell.description.replaceAll("*", "");

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

  // "group relative" add to the <tr> to enable tooltip functionality

  return (
    <>
      <tr
        {...rest}
        className={`hover:bg-indigo-200 dark:hover:bg-indigo-500 cursor-pointer border-b-2 border-neutral-200 dark:border-neutral-700 ${isSelected}`}
      >
        <td className="px-1">{spell.order}</td>
        <td className="font-medium">{spell.name}</td>
        <td className="min-w-[400px] py-2 text-center">{updatedSources}</td>
        <td className="py-2 text-center">{updatedDescription}</td>
        <td>
          <img
            className="min-w-[42px] ml-3"
            src={spell.icon}
          />
        </td>
        {/* <td className="invisible opacity-[95%] absolute max-w-[50vw] text-white rounded bottom-[105%] left-0 bg-neutral-700 dark:bg-neutral-600 p-[10px] text-[15px] group-hover:visible">
          {updatedDescription}
        </td> */}
      </tr>
    </>
  );
}

export default Spell;
