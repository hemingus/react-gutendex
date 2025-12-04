import BookList from "../components/BookList";
import Loading from "../components/ui/Loading";
import { useBooks } from "../hooks/useBookQuery";

export default function Home() {
    const { data, isLoading, isError, error } = useBooks();
    if (isLoading) return <Loading />
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <main className="bg-slate-900 flex flex-col justify-center items-center">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Home</h1>
                <Loading />
            </header>
            <BookList booklist={data}/>
        </main>
    )
}