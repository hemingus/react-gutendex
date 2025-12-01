import { Link } from "react-router-dom"

const categories = [
"Fiction",
"Mystery",
"Thriller",
"Romance",
"Fantasy",
"Morality",
"Society",
"Power",
"Justice",
"Adventure",
"Tragedy",
"War",
"Philosophy"
]

export default function Categories() {
    return (
        <ul className="bookCard">
            {categories.map(category => {
                return <Link key={category} to={`/categories/${category}`}>{category}</Link>
            })}
        </ul>
    )
}