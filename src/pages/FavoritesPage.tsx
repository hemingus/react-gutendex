import BookList from "../components/BookList"
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="bg-linear-to-r from-black from-[-100%] via-slate-900 to-black to-[200%] flex flex-col items-center min-h-screen">
            <header className="w-full text-blue-500 font-semibold text-center text-4xl p-8">
                <h1>Favorites</h1>
            </header>
            <BookList booklist={favorites} />
        </main>
    )
}