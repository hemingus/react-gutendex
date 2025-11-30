import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}