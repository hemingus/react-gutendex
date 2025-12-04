import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import FavoritesPage from "../pages/FavoritesPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>an error occurred</h1>,
        children: [
            {index: true, element: <Home />},
            {path: "book/:id", element: <BookDetails />},
            {path: "search", element: <SearchPage />},
            {path: "search/:topic", element: <SearchPage />},
            {path: "favorites", element: <FavoritesPage />},
            {path: "*", element: <h1>404 not found</h1>}
        ]
    }
])

export { router }