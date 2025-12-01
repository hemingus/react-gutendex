import { createContext, useContext, type ReactNode } from "react";
import { useFavoriteBooks } from "../hooks/useFavoriteBooks";

interface FavoritesProviderProps {
    children: ReactNode;
}

type FavoriteBooksContextType = ReturnType<typeof useFavoriteBooks>;

const FavoritesContext = createContext<FavoriteBooksContextType | null>(null);

export function FavoritesProvider({ children }:FavoritesProviderProps) {
    const value = useFavoriteBooks();
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
