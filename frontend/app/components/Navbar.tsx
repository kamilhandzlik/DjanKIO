import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b border-b-gray-200 bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="">
            <Image src="/menu.png" alt="Menu" width={38} height={38} />
          </div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={180} height={38} />
          </Link>

          <Link href="/">
            <h1 className="my-6 text-2xl">Cennik</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
