import axios from "axios";

const BASE_URL = "https://gutendex.com";

const fetchBooks = async () => {
    const res = await axios.get(`${BASE_URL}/books`);
    console.log(res.data.results);
    return res.data.results; 
}

const fetchBooksByTopic = async ( topic: string ) => {
    const res = await axios.get(`${BASE_URL}/books?topic=${topic}`)
    console.log(res.data.results);
    return res.data.results;
}

export { fetchBooks, fetchBooksByTopic }