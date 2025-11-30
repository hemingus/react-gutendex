import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>an error occurred</h1>,
        children: [
            {index: true, element: <Home />},
            {path: "book/:id", element: <BookDetails />},
            {path: "*", element: <h1>404 not found</h1>}
        ]
    }
])

export { router }