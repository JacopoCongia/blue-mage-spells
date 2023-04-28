import { useState } from "react";
import useSpellsData from "@/hooks/use-spells-data";
import classNames from "classnames";

function RadioSelector({ config }) {
  const [selected, setSelected] = useState({});
  const { includeOnly } = useSpellsData();
  const classes = classNames(
    "peer-checked:bg-indigo-200",
    "dark:peer-checked:bg-indigo-500",
    "px-2",
    "text-neutral-800",
    "dark:text-neutral-100",
    "bg-neutral-100",
    "dark:bg-neutral-800",
    "py-1",
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

  const renderedInputs = config.map((config) => {
    const position = () => {
      if (config.position === "first") {
        return "rounded-l";
      } else if (config.position === "last") {
        return "rounded-r";
      } else return "";
    };

    return (
      <div key={config.id}>
        <input
          className="peer hidden"
          type="radio"
          id={config.id}
          name="category"
          value={config.id}
          checked={selected.category === config.id}
          onChange={handleChange}
        />
        <label
          className={`${classes} ${position()}`}
          htmlFor={config.id}
        >
          {config.title}
        </label>
      </div>
    );
  });

  return (
    <fieldset className="text-neutral-100 flex">{renderedInputs}</fieldset>
  );
}

export default RadioSelector;
