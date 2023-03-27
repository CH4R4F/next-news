import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Categories from "./Categories";
import Search from "./Search";
import ThemeButton from "./ThemeButton";

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
          <p className="title">Next News</p>
        </Link>

        <div className="flex items-center justify-end space-x-5">
          <ThemeButton />

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
