import BookList from "../components/BookList";
import { useBooks, useBooksByTopic } from "../hooks/useBookQuery";

export default function Home() {
    const { data, isLoading, isError, error } = useBooksByTopic("Fantasy");
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <>
            <h1>Home</h1>
            <BookList booklist={data}/>
        </>
    )
}