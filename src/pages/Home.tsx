import BookList from "../components/BookList";
import { useBooks } from "../hooks/useBookQuery";

export default function Home() {
    const { data, isLoading, isError, error } = useBooks();
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <main className="bg-slate-900 flex flex-col justify-center items-center">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Home</h1>
            </header>
            <BookList booklist={data}/>
        </main>
    )
}