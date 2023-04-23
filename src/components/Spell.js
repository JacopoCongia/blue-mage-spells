import { useEffect, useState } from "react";

function Spell({ spell }) {
  const [selected, setSelected] = useState(false);
  const updatedDescription = spell.description.replaceAll("*", "");

  const handleClick = () => {
    setSelected((prevSelection) => !prevSelection);
  };

  const style = selected
    ? "bg-gray-100 border p-5 bg-green-100 cursor-pointer hover:opacity-90"
    : "bg-gray-100 border p-5 cursor-pointer hover:bg-gray-200";

  //   useEffect(() => {
  //     const selection = JSON.parse(localStorage.getItem("selection")) || selected;
  //     setSelected(selection);
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("selection", JSON.stringify(selected));
  //   }, [selected]);

  return (
    <div
      onClick={handleClick}
      className={style}
    >
      <div className="flex items-center mb-5">
        <h1 className="font-bold">
          #{spell.order} - {spell.name} - Patch: {spell.patch}
        </h1>
        <img
          className="ml-auto"
          src={spell.icon}
        />
      </div>
      <p className="mb-5">{updatedDescription}</p>
      <p>
        <span className="font-semibold">Obtained from: </span>
        {spell.sources[0].text}
      </p>
    </div>
  );
}

export default Spell;
