interface PaginationProps {
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
    onPageChange: (page: number) => void;
}

export default function Pagination({ page, hasNext, hasPrev, onPageChange }: PaginationProps) {
    return (
        <div className="flex items-center gap-6 mt-8 p-2 text-white">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={!hasPrev || page <= 1}
                className="cursor-pointer rounded-lg bg-blue-950 p-2 hover:bg-blue-900 border border-sky-800 disabled:opacity-20 disabled:cursor-auto"
            >
                Previous
            </button>

            <span className="text-lg">Page {page}</span>

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={!hasNext}
                className="cursor-pointer rounded-lg bg-blue-950 p-2 hover:bg-blue-900 border border-sky-800 disabled:opacity-20 disabled:cursor-auto"
            >
                Next
            </button>
        </div>
    );
}