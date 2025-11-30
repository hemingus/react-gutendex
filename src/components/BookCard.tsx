import { Link } from "react-router-dom"
import type { Book } from "../types/book"

interface BookCardProps {
    book: Book
}

export default function BookCard({ book }:BookCardProps) {
    return (
        <div className="bookCard">
            <h2>{book.title}</h2>
            <img src={book.formats["image/jpeg"]} alt={`${book.title} cover`} />
            <p>{`Topic: ${book.subjects[0]}`}</p>
            <p>{`Downloads: ${book.download_count}`}</p>
            <Link to={`/book/${book.id}`}>Details</Link>
        </div>
    )
}