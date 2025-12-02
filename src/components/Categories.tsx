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
        <ul className="w-full flex flex-wrap md:grid-cols-7 justify-center gap-4 text-white">
            {categories.map(category => {
                return <Link key={category} to={`/categories/${category}`}><li className="flex-1 bg-slate-950 p-4 cursor-pointer rounded-xl">{category}</li></Link>
            })}
        </ul>
    )
}