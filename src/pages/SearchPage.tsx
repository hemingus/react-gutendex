import BookList from "../components/BookList";
import FilterSection from "../components/FilterSection";
import Loading from "../components/ui/Loading";
import { useBooks } from "../hooks/useBookQuery";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { BookFilters } from "../types/book";
import Pagination from "../components/Pagination";


export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const page = Number(searchParams.get("page")) || 1;
    const filters = { 
        topic: searchParams.get("topic") || "",
        search: searchParams.get("search") || ""
    };

    const { data, isFetching } = useBooks({...filters, page});

    const handleApplyFilters = (newFilters: BookFilters) => {
        const params = new URLSearchParams();
        if (newFilters.search) params.set("search", newFilters.search);
        if (newFilters.topic) params.set("topic", newFilters.topic);
        params.set("page", "1");
        navigate(`/search?${params.toString()}`);
    }

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        navigate(`/search?${params.toString()}`);
    };

    const calculatePages = (count: number) => {
        const pages = Math.ceil(count / 32);
        return pages;
    }

    return (
        <main className="bg-slate-900 flex flex-col items-center min-h-screen pb-8">
            <header className="w-full text-amber-500 font-semibold text-center text-4xl p-8">
                <h1>Search</h1>
            </header>
            <FilterSection filters={filters} onApply={handleApplyFilters}/>
            {!isFetching && data && (
            <>
            <h2 className="text-white p-2">{`${data.count} books ~ Page ${page} of ${calculatePages(Number(data.count))}`}</h2>
                <Pagination
                    page={page}
                    hasNext={!!data.next}
                    hasPrev={!!data.previous}
                    onPageChange={handlePageChange}
                />
            </>)
            }
            {isFetching ? <Loading /> : <BookList booklist={data.results}/>}
            {!isFetching && data && (

                <Pagination
                    page={page}
                    hasNext={!!data.next}
                    hasPrev={!!data.previous}
                    onPageChange={handlePageChange}
                />)
            }
        </main>
    );
}
