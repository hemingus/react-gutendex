import { Link } from "react-router-dom";
import Categories from "../components/Categories";

export default function Home() {

    
    return (
        <main className="bg-linear-to-r from-black via-slate-900 to-black flex flex-col items-center  gap-8 min-h-screen pb-8 text-white p-4">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Gutendex</h1>
            </header>
            <p className="text-xl text-center">Discover thousands of classic, open-access e-books powered by Gutendex. <br/>
                Search, browse, and read timeless literature!</p> 

            <Link to={"/search"}>
                <button className="flex items-center gap-2 text-2xl bg-indigo-950 rounded-lg p-2 cursor-pointer border border-blue-500 hover:bg-indigo-900">
                    Find books 
                    <img className="w-8" src="/assets/magnifying-glass.png" alt="Magnifying glass icon" />
                </button>
            </Link>
            <p className="text-xl text-center">Explore curated categories to quickly find books that match your interests:</p>
            <Categories />
        </main>
    )
}