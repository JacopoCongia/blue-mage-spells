function Spell({ spell, textOnHover, ...rest }) {
  const updatedDescription = spell.description.replaceAll("*", "");

  const updatedSources = spell.sources.map((source) => {
    return (
      <td
        className="flex flex-col"
        key={source.text}
      >
        {source.text}
      </td>
    );
  });

  return (
    <>
      <tr
        {...rest}
        className="group relative hover:bg-indigo-200 dark:hover:bg-indigo-500 cursor-pointer border-b-2 border-neutral-200 dark:border-neutral-700"
      >
        <td className="px-1 py-4">{spell.order}</td>
        <td>{spell.name}</td>
        {updatedSources}
        <td>
          <img
            className="min-w-[42px]"
            src={spell.icon}
          />
        </td>
        <td className="invisible opacity-[95%] absolute max-w-[50vw] text-white rounded bottom-[105%] left-0 bg-neutral-700 dark:bg-neutral-600 p-[10px] text-[15px] group-hover:visible">
          {updatedDescription}
        </td>
      </tr>
    </>
  );
}

export default Spell;
