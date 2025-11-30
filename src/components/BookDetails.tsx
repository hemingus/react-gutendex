import { useParams } from "react-router-dom";
import { useBookById } from "../hooks/useBookQuery";
import type { Person } from "../types/book";

export default function BookDetails() {
    const { id } = useParams();
    if (!id) return <div>Invalid book ID.</div>

    const { data, isLoading, isError, error } = useBookById(id);
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error.toString()}</p>
    
    return (
        <div className="bookCard">
            <h1>{data.title}</h1>
            <img src={data.formats["image/jpeg"]} alt={`${data.title} cover`} />
            <label>Authors:</label>
            <ul>
                {data.authors.map((author: Person) => {
                    return <li>{author.name}</li>
                })}
            </ul>
            <p>Downloads: {data.download_count}</p>
            <label>Categories: {data.subjects[0]}</label>
            <ul>
                {data.subjects.map((subject: string) => {
                    return <li>{subject}</li>
                })}
            </ul>
            <label>Language:</label>
            <ul>
                {data.languages.map((language: string) => {
                    return <li>{language}</li>
                })}
            </ul>
        </div>
    )
}