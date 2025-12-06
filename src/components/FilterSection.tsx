import { useState } from "react";
import type { BookFilters } from "../types/book";
import { categories } from "./data/categories";

interface FilterSectionProps {
    filters: BookFilters
    onApply: ({}: BookFilters) => void;
}

export default function FilterSection({ filters, onApply }: FilterSectionProps) {
    const [searchText, setSearchText] = useState<string>(filters.search || "");
    const [selectedTopic, setSelectedTopic] = useState<string>(filters.topic || "");

    const handleApply = () => {
        onApply({search: searchText, topic: selectedTopic});
    }

    return (
        <section className="flex flex-wrap gap-2 p-4 text-white">
            <input
                className="bg-slate-600 text-2xl p-1 rounded-md"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {if (e.key === "Enter") handleApply()}}
            />

            <select
                className="bg-slate-600 text-2xl p-1 rounded-md"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
            >   <option value="">All topics</option>
                {categories.map((category) => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </select>

                        <button
            onClick={handleApply}
            className="text-amber-200 bg-slate-600 rounded-lg p-2 cursor-pointer">Apply filter</button>
        </section>
    );
}