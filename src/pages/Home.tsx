import BookList from "../components/BookList";
import { useBooks } from "../hooks/useBookQuery";

export default function Home() {
    const { data, isLoading, isError, error } = useBooks();
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <>
            <h1>Home</h1>
            <BookList booklist={data}/>
        </>
    )
}