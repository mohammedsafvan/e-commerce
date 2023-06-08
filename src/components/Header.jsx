import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link
          href={"/cart"}
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        >
          <div className="relative ">
            <ShoppingCartIcon className="h-7 w-7 flex-shrink-0" />
          </div>
          <p className="text-lg">$600</p>
        </Link>
      </div>
    </header>
  );
}