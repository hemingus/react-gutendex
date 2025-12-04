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
        <ul className="grid grid-cols-4 justify-center gap-4 text-white">
            {categories.map(category => {
                return <li style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)), url('/assets/${category}.png`}}
                        className={`border-2 border-[rgba(50,50,50,0.3)] text-gray-200 relative 
                        flex justify-center items-center w-[250px] h-[140px] bg-cover bg-center 
                        p-4 cursor-pointer rounded-xl  transition-all duration-200
                        hover:scale-105 hover:text-white hover:shadow-[3px_3px_10px_1px_black]`}>
                            <Link className="z-10 rounded-lg p-2 font-bold text-xl" key={category} to={`/categories/${category}`}>
                                {category}
                            </Link>
                        </li>
            })}
        </ul>
    )
}