import axios from "axios";

const fetchSpells = async () => {
  const response = await axios.get("https://ffxivcollect.com/api/spells");
  return response.data.results;
};

export default fetchSpells;
