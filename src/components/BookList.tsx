import { useFavorites } from "../context/FavoritesContext";
import type { Book } from "../types/book"
import BookCard from "./BookCard"

interface BookListProps {
    booklist: Book[]
}

export default function BookList( { booklist }:BookListProps) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    return (
        <div className="bookList">
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