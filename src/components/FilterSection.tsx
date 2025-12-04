import type { BookFilters } from "../types/book";
import { categories } from "./data/categories";

interface FilterSectionProps {
    filters: BookFilters & {page: number}
    setFilters: React.Dispatch<React.SetStateAction<BookFilters & {page: number}>>;
    onApply: () => void;
}

export default function FilterSection({ filters, setFilters, onApply }: FilterSectionProps) {
    return (
        <section className="flex flex-wrap gap-2 p-4 text-white">
            <input
                className="bg-slate-600 text-2xl p-1 rounded-md"
                type="text"
                placeholder="Search"
                value={filters.search ?? ""}
                onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
            />

            <select
                className="bg-slate-600 text-2xl p-1 rounded-md"
                value={filters.topic ?? ""}
                onChange={(e) => setFilters(f => ({ ...f, topic: e.target.value }))}
            >   <option value="">All topics</option>
                {categories.map((category) => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </select>

                        <button
            onClick={onApply}
            className="text-amber-200 bg-slate-600 rounded-lg p-2 cursor-pointer">Apply filter</button>
        </section>
    );
}