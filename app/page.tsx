import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

export const metadata = {
  title: "Next News",
};

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","), "");

  console.log(news);

  return <h1>hello</h1>;
}
