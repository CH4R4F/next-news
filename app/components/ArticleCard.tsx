import Image from "next/image";
import Link from "next/link";

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <div className="w-full mx-auto group sm:max-w-sm">
      <Link title={article.title} href={`/news/${article.title}`}>
        {article.image ? (
          <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
            <div className="absolute px-3 py-2 text-xs bg-slate-800 text-white top-1 left-1 z-40 rounded-sm">
              {article.source}
            </div>
            <Image src={article.image} alt={article.title} fill={true} />
          </div>
        ) : (
          <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md bg-bg_white dark:bg-slate-700 border-2 border-bg_black dark:border-orange-500 flex items-center justify-center">
            <p className="title">Next News</p>
          </div>
        )}
      </Link>
      <div className="mt-3 space-y-2">
        <Link title={article.title} href={`/news/${article.title}`}>
          <div className="mb-2 flex items-center space-x-3">
            <span className="block text-text_black text-sm dark:text-text_white">
              {article.published_at.split("T")[0]}
            </span>
            <div className="px-3 py-1 text-xs bg-slate-400 dark:bg-slate-600 rounded-sm">
              {article.category}
            </div>
          </div>
          <h3 className="text-lg text-gray-800 duration-150 group-hover:text-orange-600 font-semibold line-clamp-2 dark:text-white">
            {article.title}
          </h3>
        </Link>
        <p className="text-text_black dark:text-text_white/50 text-sm duration-150 group-hover:text-text_important_black line-clamp-6 dark:group-hover:text-text_white">
          {article.description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
