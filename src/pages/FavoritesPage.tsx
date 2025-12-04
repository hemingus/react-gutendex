import BookList from "../components/BookList"
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="bg-slate-900 flex flex-col justify-center items-center min-h-screen">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Favorites</h1>
            </header>
            <BookList booklist={favorites} />
        </main>
    )
}