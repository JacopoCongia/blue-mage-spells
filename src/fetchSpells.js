const fetchSpells = async () => {
  const response = await fetch("https://ffxivcollect.com/api/spells");
  const data = await response.json();
};

export default fetchSpells;
