import axios from "axios";

const API = axios.create({
  baseURL: "https://intern-pokedex.myriadapps.com/api/v1",
  transformResponse: [
    function (data): any {
      return JSON.parse(data).data;
    },
  ],
});

export default API;
