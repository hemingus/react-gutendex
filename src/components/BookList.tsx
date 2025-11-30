import type { Book } from "../types/book"
import BookCard from "./BookCard"

interface BookListProps {
    booklist: Book[]
}

export default function BookList( { booklist }:BookListProps) {
    return (
        <div className="bookList">
            {booklist.map((book) => {
                return <BookCard key={book.id} book={book} />
            })}
        </div>
    )
}