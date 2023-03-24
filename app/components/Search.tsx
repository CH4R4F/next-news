"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?query=${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-4xl px-4 mx-auto mt-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-text_black border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-slate-800"
        />
      </div>
    </form>
  );
}

export default Search;
