import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer `,
  },
});

export const getSearchedRestaurants = async (term) => {
  try {
    const { data } = await yelp.get("/search", {
      params: {
        location: "NYC",
        term,
        limit: 20,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantDetails = async (id) => {
  try {
    const { data } = await yelp.get(`/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
