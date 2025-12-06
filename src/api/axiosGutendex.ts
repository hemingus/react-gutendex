import axios from "axios";
import type { BookQueryParams } from "../types/book";

const BASE_URL = "https://gutendex.com";

const fetchBooks = async ( params: BookQueryParams ) => {
    const res = await axios.get(`${BASE_URL}/books`, {
        params: params
    });
    console.log(res.data);
    return res.data;
}

const fetchBookById = async ( id: string ) => {
    const res = await axios.get(`${BASE_URL}/books/${id}`)
    console.log(res.data);
    return res.data;
}

export { fetchBooks, fetchBookById }