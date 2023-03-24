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
          <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md bg-bg_white border-2 border-bg_black flex items-center justify-center">
            <p className="text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
              Next News
            </p>
          </div>
        )}
      </Link>
      <div className="mt-3 space-y-2">
        <Link title={article.title} href={`/news/${article.title}`}>
          <div className="mb-2 flex items-center space-x-3">
            <span className="block text-text_black text-sm">
              {article.published_at.split("T")[0]}
            </span>
            <div className="px-3 py-1 text-xs bg-slate-400 rounded-sm">
              {article.category}
            </div>
          </div>
          <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 line-clamp-6">
          {article.description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
