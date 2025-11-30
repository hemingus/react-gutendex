import { useQuery } from "@tanstack/react-query";
import { fetchBookById, fetchBooks, fetchBooksByTopic } from "../api/axiosGutendex";

const useBooks = () => {
    return useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks
    });
}

const useBooksByTopic = (topic: string) => {
    return useQuery({
        queryKey: ["booksByTopic", topic],
        queryFn: () => fetchBooksByTopic(topic)
    });
}

const useBookById = (id: string) => {
    return useQuery({
        queryKey: ["bookById", id],
        queryFn: () => fetchBookById(id)
    });
}

export { useBooks, useBooksByTopic, useBookById };