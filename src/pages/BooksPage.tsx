import { useState } from "react";
import { useBooksQuery } from "../hooks/useBooksQuery";

// Components
import SearchBar from "../components/filters/SearchBar";
import FiltersPanel from "../components/filters/FiltersPanel";
import BookList from "../components/books/BookList";
import BookPagination from "../components/books/BookPagination";

export default function BooksPage() {
  /**
   * PAGE STATE
   * This is the single source of truth for:
   *  - search text
   *  - topic filter
   *  - pagination
   */
  const [filters, setFilters] = useState({
    page: 1,
    search: "",
    topic: "",
  });

  /**
   * REACT QUERY DATA FETCHING
   * https://www.youtube.com/shorts/E0K9NdagF1s
   * Automatically refetches any time "filters" changes.
   */
  const { data, isLoading, isError } = useBooksQuery(filters);

  /**
   * GUTENDEX PAGINATION INFO
   * It only gives "next" and "previous" URLs.
   */
  const hasNext = Boolean(data?.next);
  const hasPrev = Boolean(data?.previous);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      
      {/* 🔍 SEARCH INPUT */}
      <SearchBar
        value={filters.search}
        onChange={(search) =>
          setFilters({
            ...filters,
            search,
            page: 1, // reset when searching
          })
        }
      />

      {/* 🎛 FILTERS (optional) */}
      <FiltersPanel
        topic={filters.topic}
        onChange={(topic) =>
          setFilters({
            ...filters,
            topic,
            page: 1, // reset when filtering
          })
        }
      />

      {/* 📚 BOOK LIST */}
      <BookList
        books={data?.results}
        isLoading={isLoading}
        isError={isError}
      />

      {/* 📄 PAGINATION */}
      <BookPagination
        currentPage={filters.page}
        hasNext={hasNext}
        hasPrev={hasPrev}
        onChange={(page) =>
          setFilters({
            ...filters,
            page,
          })
        }
      />
    </div>
  );
}
