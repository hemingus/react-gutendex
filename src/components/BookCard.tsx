import type { Book } from "../types/book"

interface BookCardProps {
    book: Book
}

export default function BookCard({ book }:BookCardProps) {
    return (
        <div>
            <h2>{book.title}</h2>
            <img src={book.imageURL} alt={`${book.title} cover`} />
        </div>
    )
}