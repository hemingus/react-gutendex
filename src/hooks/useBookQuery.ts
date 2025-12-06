import { useQuery } from "@tanstack/react-query";
import { fetchBookById, fetchBooks } from "../api/axiosGutendex";
import type { BookQueryParams } from "../types/book";

const useBooks = (params: BookQueryParams) => {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => fetchBooks(params),
    });
}

const useBookById = (id: string) => {
    return useQuery({
        queryKey: ["bookById", id],
        queryFn: () => fetchBookById(id)
    });
}

export { useBooks, useBookById };