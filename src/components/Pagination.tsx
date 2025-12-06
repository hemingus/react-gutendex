interface PaginationProps {
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
    onPageChange: (page: number) => void;
}

export default function Pagination({ page, hasNext, hasPrev, onPageChange }: PaginationProps) {
    return (
        <div className="flex items-center gap-6 mt-8 text-white">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={!hasPrev || page <= 1}
                className="px-4 py-2 bg-blue-800 rounded disabled:opacity-40 cursor-pointer"
            >
                Previous
            </button>

            <span className="text-lg">Page {page}</span>

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={!hasNext}
                className="px-4 py-2 bg-blue-800 rounded disabled:opacity-40 cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}