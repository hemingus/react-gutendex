import { createContext, useContext, type ReactNode } from "react";
import type { Book } from "../types/book";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoritesProviderProps {
    children: ReactNode;
}

interface FavoritesContextType {
    favorites: Book[];
    addFavorite: (book: Book) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }:FavoritesProviderProps) {
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

    const value: FavoritesContextType = { favorites, addFavorite, removeFavorite, isFavorite };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used inside FavoritesProvider");
    }
    return context;
}
