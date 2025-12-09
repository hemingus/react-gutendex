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
        <section className="flex flex-wrap items-center justify-center gap-2 p-4 text-white">
            <img className="h-12" src="/assets/magnifying-glass.png" alt="Magnifying glass icon" />
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
            className="text-2xl bg-indigo-950 rounded-lg py-1 px-2 cursor-pointer border-4 border-[rgba(0,50,100,0.5)] hover:bg-indigo-900">Apply filter</button>
        </section>
    );
}