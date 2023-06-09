import { useState } from "react";
import useSpellsData from "@/hooks/use-spells-data";
import classNames from "classnames";

function RadioSelector({ config }) {
  const { includeOnly, selected, setSelected, searchField } = useSpellsData();
  const classes = classNames(
    "peer-checked:bg-indigo-200",
    "dark:peer-checked:bg-indigo-500",
    "select-none",
    "text-neutral-800",
    "dark:text-neutral-100",
    "bg-neutral-100",
    "dark:bg-neutral-800",
    "py-[0.625em]",
    "px-[0.875em]",
    "text-[1rem]",
    "hover:bg-indigo-100",
    "dark:hover:bg-indigo-400",
    "cursor-pointer"
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setSelected((prevSelected) => {
      return {
        ...prevSelected,
        category: value
      };
    });
    includeOnly(value);
  };

  const renderedInputs = config.map((entry) => {
    const position = () => {
      if (config.indexOf(entry) === 0) {
        return "rounded-l";
      } else if (config.indexOf(entry) === config.length - 1) {
        return "rounded-r";
      } else return "";
    };

    return (
      <div key={entry.id}>
        <input
          className="peer hidden"
          type="radio"
          id={entry.id}
          name="category"
          value={entry.id}
          checked={selected.category === entry.id}
          onChange={handleChange}
        />
        <label
          className={`${classes} ${position()}`}
          htmlFor={entry.id}
        >
          {entry.title}
        </label>
      </div>
    );
  });

  return (
    <fieldset className="hidden text-neutral-100 md:flex">
      {renderedInputs}
    </fieldset>
  );
}

export default RadioSelector;
