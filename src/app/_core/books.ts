export interface BooksApiResponse {
  docs: Book[];
  numFound: number;
  numFoundExact: number;
  offset: number;
  q: string;
  start: number;
}

export interface Book {
  title: string;
  person: string[];
  place: string[];
  ratings_average: number;
  publish_year: number[];
  number_of_pages_median: number;
  subject: string[];
  key: string;
  isbn: string[];
  cover_i: string;
  author_name: string[];
}

export interface BookDetail {
  description: {
    value: string;
  }
  title: string;
  key: string;
  covers: string[];
  authors: Author[];
  subjects: string[];
  first_publish_date: string;
}

export interface Author {
  type: { key: string };
  author: { key: string };
  name: string;
  birth_date: string;
}
