import BookList from "../components/BookList"
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Favorites</h1>
            <BookList booklist={favorites} />
        </div>
    )
}