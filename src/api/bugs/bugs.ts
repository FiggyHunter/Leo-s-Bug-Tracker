import axios from "axios";

const fetchRecentBugs = async (setBugs, userId) => {
  try {
    if (userId === "") return;
    const fetchedBugs = await axios.get(
      `${import.meta.env.VITE_REST_ENDPOINT}/bugs/recent`,
      {
        headers: {
          "X-USER-ID": userId,
        },
      }
    );

    if (fetchedBugs.data.length === 0) {
      setBugs(null);
      return;
    }
    setBugs(fetchedBugs.data);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
export { fetchRecentBugs };
