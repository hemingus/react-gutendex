import type { Book } from "../types/book";
import { useLocalStorage } from "./useLocalStorage";

export function useFavoriteBooks() {
    const [favorites, setFavorites] = useLocalStorage<Book[]>({
        key: "favorites",
        defaultValue: []
    })

    const addFavorite = (book: Book) => {
        if (!isFavorite(book.id)) setFavorites(prev => [...prev, book]);
    }

    const removeFavorite = (id: number) => {
        setFavorites(prev => prev.filter(b => b.id !== id));
    }

    const isFavorite = (id: number) => {
        return favorites.some(b => b.id === id);
    }

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }
}