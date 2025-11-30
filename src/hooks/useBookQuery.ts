import { useQuery } from "@tanstack/react-query";
import { fetchBooks, fetchBooksByTopic } from "../api/axiosGutendex";

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

export { useBooks, useBooksByTopic };