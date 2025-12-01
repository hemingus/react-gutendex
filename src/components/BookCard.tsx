import { Link } from "react-router-dom"
import type { Book } from "../types/book"

interface BookCardProps {
    book: Book
    isFavorite: (id: number) => boolean
    addFavorite: (book: Book) => void
    removeFavorite: (id: number) => void
}

export default function BookCard({ book, isFavorite, addFavorite, removeFavorite }:BookCardProps) {
   
    return (
        <div className="bookCard">
            <h2>{`${book.title} ${isFavorite(book.id) && " 🌟"}`}</h2>
            <img src={book.formats["image/jpeg"]} alt={`${book.title} cover`} />
            <p>{`Topic: ${book.subjects[0]}`}</p>
            <p>{`Downloads: ${book.download_count}`}</p>
            <Link to={`/book/${book.id}`}>Details</Link>
            {isFavorite(book.id) ? 
                <button onClick={() => removeFavorite(book.id)}>Remove from favorites</button>
                : 
                <button onClick={() => addFavorite(book)}>Add to favorites</button>}   
        </div>
    )
}