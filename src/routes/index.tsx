import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import FavoritesPage from "../pages/FavoritesPage";
import SearchPage from "../pages/SearchPage";
import ErrorScreen from "../components/ui/ErrorScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen message="An error occurred..." />,
        children: [
            {index: true, element: <Home />},
            {path: "book/:id", element: <BookDetails />},
            {path: "search", element: <SearchPage />},
            {path: "favorites", element: <FavoritesPage />},
            {path: "*", element: <ErrorScreen message="Page not found..." />,}
        ]
    }
])

export { router }