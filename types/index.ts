type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Pagination = {
  count: number;
  total: number;
  offset: number;
  limit: number;
};

type Article = {
  auhtor: string | null;
  title: string;
  description: string;
  url: string;
  image: string | null;
  published_at: string;
  source: string;
  category: Category;
  country: string;
  language: string;
};
