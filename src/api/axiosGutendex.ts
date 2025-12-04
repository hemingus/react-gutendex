import axios from "axios";
import type { BookFilters } from "../types/book";

const BASE_URL = "https://gutendex.com";

const fetchBooks = async (filters: BookFilters & {page: number} = {page: 1}) => {
    const res = await axios.get(`${BASE_URL}/books`, {
        params: {
            search: filters.search,
            topic: filters.topic,
            page: filters.page,
        },
    });
    console.log(res.data.results);
    return res.data.results; 
}

const fetchBookById = async ( id: string ) => {
    const res = await axios.get(`${BASE_URL}/books/${id}`)
    console.log(res.data);
    return res.data;
}

export { fetchBooks, fetchBookById }