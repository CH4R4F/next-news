import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import ArticleCard from "./components/ArticleCard";

export const metadata = {
  title: "Next News",
};

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","), "");

  return (
    <main className="grid gap-x-8 gap-y-14 mt-16 sm:grid-cols-2 lg:grid-cols-3 pb-10">
      {news.data.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </main>
  );
}
