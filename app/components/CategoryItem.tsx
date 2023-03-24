import Link from "next/link";

type Props = {
  category: Category;
  isActive: boolean;
};

const CategoryItem = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`category-item ${
        isActive &&
        "underline underline-offset-4 decoration-text_black text-black"
      }`}
    >
      {category}
    </Link>
  );
};

export default CategoryItem;
