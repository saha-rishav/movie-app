// Importing the axios library for making HTTP requests
import axios from "axios";

// Defining the base URL for the TMDB API
const BASE_URL = "https://api.themoviedb.org/3"

// Retrieving the TMDB token from environment variables using Vite
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Defining headers for authorization, including the TMDB token
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

// Method for fetching data from the TMDB API
export const fetchDataFromApi = async (url, params) => {
    try {
        // Making a GET request to the provided URL with axios
        const { data } = await axios.get(BASE_URL + url, {
            // Including the headers for authorization
            headers: headers,
            // Including any additional parameters in the request
            params,
        })
        // Returning the fetched data
        return data;
    } catch (err) {
        // Catching any errors that occur during the request
        console.log("err");
        // Returning the error object
        return err;
    }
}
