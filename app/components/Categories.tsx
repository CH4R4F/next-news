"use client";

import { categories } from "@/constants";
import CategoryItem from "./CategoryItem";
import { usePathname } from "next/navigation";

const Categories = () => {
  const pathname = usePathname();
  return (
    <nav className="overflow-y-auto whitespace-nowrap scroll-hidden max-w-4xl mx-auto flex justify-center">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          isActive={pathname?.split("/").pop() == category}
        />
      ))}
    </nav>
  );
};

export default Categories;
