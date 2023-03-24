import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Categories from "./Categories";
import Search from "./Search";

function Header(): JSX.Element {
  return (
    <header className="max-w-[90rem] mx-auto">
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />

        <Link
          className="text-center text-text_important_black"
          href="/"
          prefetch={false}
        >
          {/* gradient background text */}
          <p className="text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-orange-700">
            Next News
          </p>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* categories */}
      <Categories />

      {/* search */}
      <Search />
    </header>
  );
}

export default Header;
