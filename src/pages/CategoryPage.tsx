import { useParams } from "react-router-dom"
import { useBooksByTopic } from "../hooks/useBookQuery";
import BookList from "../components/BookList";
import Categories from "../components/Categories";

export default function CategoryPage() {
    const { topic } = useParams();
    if (!topic) return <h1>Invalid category.</h1>
    const { data, isLoading, isError, error } = useBooksByTopic(topic);
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <div>
            <Categories />
            <h1>{topic}</h1>
            <BookList booklist={data}/>
        </div>
    )
}