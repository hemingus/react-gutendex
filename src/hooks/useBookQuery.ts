import { useQuery } from "@tanstack/react-query";
import { fetchBookById, fetchBooks } from "../api/axiosGutendex";
import type { BookFilters } from "../types/book";

const useBooks = (filters: BookFilters & {page: number}) => {
    return useQuery({
        queryKey: ["books", filters],
        queryFn: () => fetchBooks(filters),
    });
}

const useBookById = (id: string) => {
    return useQuery({
        queryKey: ["bookById", id],
        queryFn: () => fetchBookById(id)
    });
}

export { useBooks, useBookById };