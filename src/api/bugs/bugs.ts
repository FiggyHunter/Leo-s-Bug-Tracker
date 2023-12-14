import axios from "axios";

const fetchRecentBugs = async (setBugs, userId) => {
  try {
    const fetchedBugs = await axios.get(
      `${import.meta.env.VITE_REST_ENDPOINT}/bugs/recent`,
      {
        headers: {
          "x-user-id": userId,
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
