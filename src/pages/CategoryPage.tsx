import { useParams } from "react-router-dom"
import { useBooksByTopic } from "../hooks/useBookQuery";
import BookList from "../components/BookList";
import Categories from "../components/Categories";

export default function CategoryPage() {
    const { topic } = useParams();
    if (!topic) return (
            <main className="bg-slate-900 flex flex-col items-center min-h-screen">
                <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                    <h1>Categories</h1>
                </header>
                <Categories />
            </main>
    )
    const { data, isLoading, isError, error } = useBooksByTopic(topic);
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <main className="bg-slate-900 flex flex-col justify-center items-center min-h-screen">
            <Categories />
            <h1 className="w-full text-amber-500 font-semibold text-center text-4xl p-8">{topic}</h1>
            <BookList booklist={data}/>
        </main>
    )
}