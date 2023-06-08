import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <Image src={"/logo.svg"} width={42} height={42} alt="logo" />
      <span className="font-extrabold text-3xl text-gray-700 hidden sm:inline-block">
        EpicStore
      </span>
    </Link>
  );
}
