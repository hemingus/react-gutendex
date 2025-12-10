import { useQuery } from "@tanstack/react-query";
import { fetchBookById, fetchBooks } from "../api/axiosGutendex";
import type { BookQueryParams } from "../types/book";

const useBooks = (params: BookQueryParams) => {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => fetchBooks(params),
        staleTime: 1000 * 60 * 5, // <-- prevents refetch on back navigation
        gcTime: 1000 * 60 * 30,   // optional: keep cached longer
    });
}

const useBookById = (id: string) => {
    return useQuery({
        queryKey: ["bookById", id],
        queryFn: () => fetchBookById(id)
    });
}

export { useBooks, useBookById };