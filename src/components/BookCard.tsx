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
        <div className={`${isFavorite(book.id) ? "bg-emerald-900" : "bg-slate-800"} flex flex-col justify-between items-center gap-4 text-white text-center
        grid-1 p-8 rounded-xl border border-slate-700`}>
            <h2 className="text-xl">{`${book.title} ${isFavorite(book.id) ? " 🌟" : ""}`}</h2>
            <img className="w-[80%]" src={book.formats["image/jpeg"]} alt={`${book.title} cover`} />
            <p>{`Topic: ${book.subjects[0]}`}</p>
            <p>{`Downloads: ${book.download_count}`}</p>
            <Link to={`/book/${book.id}`}><button className="cursor-pointer rounded-lg bg-blue-950 p-2 hover:bg-blue-900 border border-sky-800">Details</button></Link>
            {isFavorite(book.id) ? 
                <button className="cursor-pointer rounded-lg bg-gray-800 p-2 hover:bg-gray-900 border border-gray-600" 
                    onClick={() => removeFavorite(book.id)}>
                        ➖ Remove from favorites
                </button>
                : 
                <button className="cursor-pointer rounded-lg bg-teal-900 p-2 hover:bg-teal-800 border border-teal-800" 
                    onClick={() => addFavorite(book)}>
                        ➕ Add to favorites
                </button>}   
        </div>
    )
}