import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/axiosGutendex";

const useBooks = () => {
    return useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks
    });
}

export { useBooks };