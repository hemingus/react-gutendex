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
            <h1 className="text-4xl text-blue-300 p-4 w-full text-center bg-slate-800">{data.title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-start w-full max-w-[1200px]">
                
                
                
                <img className="w-3/4 max-w-xs mx-auto object-contain p-4" src={data.formats["image/jpeg"]} alt={`${data.title} cover`} />
                
                   
                <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 p-4">
                    
                    <div>
                        <h2 className="text-2xl text-amber-200 mb-2">Authors</h2>
                        <ul>
                            {data.authors.map((author: Person) => {
                                return <li className="w-fit text-xl rounded-lg">{author.name}</li>
                            })}
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl text-amber-200 mb-2">Subjects</h2>
                        <ul className="flex flex-wrap gap-2">
                            {data.subjects.map((subject: string) => {
                                return <li className="w-fit bg-[rgba(0,0,0,0.5)] rounded-lg p-1.5">{subject}</li>
                            })}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl text-amber-200 mb-2">Languages</h2>
                        <ul>
                            {data.languages.map((language: string) => {
                                return <li className="w-fit bg-slate-700 rounded-lg p-1.5">{language}</li>
                            })}
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl text-amber-200 mb-2">E-book</h2>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-blue-700 w-fit p-2 hover:bg-blue-600 rounded-lg" href={data.formats["text/html"]} target="_blank">HTML</a>
                            <a className="bg-blue-700 w-fit p-2 hover:bg-blue-600 rounded-lg" href={data.formats["application/epub+zip"]} target="_blank">EPUB</a>
                            <a className="bg-blue-700 w-fit p-2 hover:bg-blue-600 rounded-lg" href={data.formats["text/html"]} target="_blank">HTML</a>
                            <a className="bg-blue-700 w-fit p-2 hover:bg-blue-600 rounded-lg" href={data.formats["text/html"]} target="_blank">HTML</a>
                        </div>
                    </div>

                </div>

                <div className="mt-8 col-span-2 flex flex-col gap-4 justify-end p-4">
                    <h2 className="text-2xl text-amber-200 mb-2">Summary</h2>
                    {data.summaries.map((s: string, index: number) => {
                        return <p key={index}>{s}</p>
                    })}
                </div>
                
            </div>

        </div>
    )
}