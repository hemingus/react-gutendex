export interface GutendexResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Book[];
}

export interface Book {
    id: number;
    title: string;
    authors: Person[];
    translators: Person[];
    editors: Person[];
    summaries: string[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean | null;
    media_type: string;
    formats: Formats;
    download_count: number;
}

export interface Person {
    name: string;
    birth_year: number | null;
    death_year: number | null;
}

export interface Formats {
    [mimeType: string]: string;
}

export interface BookFilters {
    search?: string;
    topic?: string;
}

export interface BookQueryParams extends BookFilters {
    page: number;
}