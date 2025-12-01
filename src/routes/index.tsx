import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import CategoryPage from "../pages/CategoryPage";
import Categories from "../components/Categories";
import FavoritesPage from "../pages/FavoritesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>an error occurred</h1>,
        children: [
            {index: true, element: <Home />},
            {path: "book/:id", element: <BookDetails />},
            {path: "categories", element: <Categories />},
            {path: "categories/:topic", element: <CategoryPage />},
            {path: "favorites", element: <FavoritesPage />},
            {path: "*", element: <h1>404 not found</h1>}
        ]
    }
])

export { router }