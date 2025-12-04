import { Link } from "react-router-dom";
import Categories from "../components/Categories";

export default function Home() {

    
    return (
        <main className="bg-slate-900 flex flex-col items-center h-screen">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Home</h1>
            </header>
            <Link to={"/search"}>
                <p>Browse</p>
            </Link>
            <h2></h2>
            <Categories />
        </main>
    )
}