import BookList from "../components/BookList";
import { useBooks } from "../hooks/useBookQuery";
import type { Book } from "../types/book";

export default function Home() {
    const { data, isLoading, isError, error } = useBooks();
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    const creatBookList = () => {
        const booklist :Book[] = [];
        data.forEach((book) => {
            booklist.push({
                id: book.id,
                title: book.title,
                authors: book.authors,
                imageURL: book.formats["image/jpeg"],
                subjects: book.subjects,
                downloadCount: book.count
            })
        })
    }

    return (
        <>
            <h1>Home</h1>
            <BookList booklist={data}/>
        </>
    )
}