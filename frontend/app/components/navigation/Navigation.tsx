import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center space-x-2">
      <div className="bg-white rounded-full px-3 hover:bg-gray-200 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="w-[45px] h-[45px] cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={180} height={38} />
      </Link>
    </nav>
  );
};

export default Navigation;
