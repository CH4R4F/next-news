import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery($access_key: String!, $categories: String!) {
      myQuery(access_key: $access_key, categories: $categories) {
        data {
          author
          category
          country
          description
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch("https://devon.stepzen.net/api/news/__graphql", {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords,
      },
    }),
  });

  const response = await res.json();

  // sort data by images present
  const data = response.data.myQuery as NewsResponse;
  const dataWithImages = data.data.filter((article: Article) => article.image);
  const dataWithoutImages = data.data.filter(
    (article: Article) => !article.image
  );

  return {
    data: [...dataWithImages, ...dataWithoutImages],
    pagination: data.pagination,
  };
};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=<API-KEY>&categories=technology,science
