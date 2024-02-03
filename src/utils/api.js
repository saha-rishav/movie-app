import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBlMDdmYTlhZTNjYWYwZWQyMTQzMDJlNTViZGJiMSIsInN1YiI6IjY1ODEzODA1N2U0MDNkMDkwYWY1NDk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cg7AldLMiQ3AXUTBGv5cIBWhKcHtv0kJPA7fSYLU38g";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

// Method
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers: headers, // We can give only headers also because they are same
            params,
        })
        return data;
    } catch (err) {
        console.log("err");
        return err;
    }
}