import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import FilterSection from "../components/FilterSection";
import Loading from "../components/ui/Loading";
import { useBooks } from "../hooks/useBookQuery";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import type { BookFilters } from "../types/book";


export default function SearchPage() {
    const { topic: pathTopic } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [filters, setFilters] = useState<BookFilters & {page: number}>({
        search: searchParams.get("search") || "",
        topic: pathTopic ?? "",
        page: Number(searchParams.get("page")) || 1,
    });

    const [appliedFilters, setAppliedFilters] = useState(filters);

    const { data, isFetching, refetch } = useBooks(appliedFilters);

    useEffect(() => {
        if (pathTopic) {
            setFilters(prev => ({
            ...prev, topic: pathTopic,
            }))
        }

    }, [pathTopic])

    const handleFilterChange = (updated: Partial<typeof filters>) => {
        setFilters(prev => ({ ...prev, ...updated, page: 1 }))
    }

    const handleApplyFilters = () => {
        setAppliedFilters(filters);
        setFilters(prev => ({ ...prev, topic: filters.topic }));
        const topicSegment = filters.topic ? `/search/${filters.topic}` : "/search";
        const params = new URLSearchParams();
        if (filters.search) params.set("search", filters.search);
        if (filters.page) params.set("page", filters.page.toString());
        navigate(`${topicSegment}?${params.toString()}`);
        refetch();
    }

    return (
        <main className="bg-slate-900 flex flex-col items-center min-h-screen">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Search</h1>
            </header>
            <FilterSection filters={filters} setFilters={setFilters} onApply={handleApplyFilters}/>
            <h2 className="text-white">{`Category: ${filters.topic} ~ Search: ${filters.search}`}</h2>
            {isFetching ? <Loading /> : <BookList booklist={data}/>}
        </main>
    );
}
