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
        <div className="flex flex-col gap-4 w-full min-h-screen bg-slate-900 text-white items-center">
            <h1 className="text-4xl text-amber-200">{data.title}</h1>
            <div className="grid lg:grid-cols-2  items-center justify-center max-w-[1200px]">
                
                
                <img className="w-1/2" src={data.formats["image/jpeg"]} alt={`${data.title} cover`} />
                <div className="col-span-3 lg:col-span-1">
                    
                    <label>Authors:</label>
                    <ul>
                        {data.authors.map((author: Person) => {
                            return <li>{author.name}</li>
                        })}
                    </ul>
                    <p>Downloads: {data.download_count}</p>
                    <label>Categories: {data.subjects[0]}</label>
                    <ul className="flex flex-col gap-1">
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

                <div className="flex flex-col gap-4 justify-end lg">
                    <h2 className="text-2xl">Summary</h2>
                    {data.summaries.map((s: string, index: number) => {
                        return <p key={index}>{s}</p>
                    })}
                </div>
            </div>

        </div>
    )
}