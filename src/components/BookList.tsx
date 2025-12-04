import { useFavorites } from "../context/FavoritesContext";
import type { Book } from "../types/book"
import BookCard from "./BookCard"

interface BookListProps {
    booklist: Book[]
}

export default function BookList( { booklist = [] }:BookListProps) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    return (
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-stretch mb-8">
            {booklist.map((book) => {
                return <BookCard 
                    key={book.id} book={book} 
                    isFavorite={isFavorite} 
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    />
            })}
        </div>
    )
}