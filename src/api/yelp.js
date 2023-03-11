import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer bIxDakILOL38QIqoQ4gbCgzupanaigiC4u9lSHh1KQ7LqL5R80q1qRVRMHjGfqtm4piuxeVfomodSJm_ONLatqOHj38EEjsleSds-6P4bzA58gJz_QiMxbtE91kJZHYx`,
  },
});
