import axios from "axios";
const fetchRequest = async (url: string, query: string) => {
  const options = {
    method: "GET",
    url,
    params: { query },
    // headers: {
    //   "x-rapidapi-key": "a5c17d9f8dmsh6ed36fd3b1bf1aap13dfe6jsn042f8b8e5586",
    //   "x-rapidapi-host": "booking-com15.p.rapidapi.com",
    // },
  };

  try {
    const response = await axios.request(options);
    return response.data.data??response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error: ${error.response.status} - ${error.response.statusText}. ${
            error.response.data.message ||
            "An error occurred while fetching the data."
          }`
        );
      } else if (error.request) {
        throw new Error("Network error: No response received from the server.");
      } else {
        throw new Error(`Error in request setup: ${error.message}`);
      }
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
export default fetchRequest;
