import Image from "next/image";
import Link from "next/link";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="flex w-full flex-col items-center gap-4 px-2 lg:flex-row lg:justify-between">
        <Link href={"/"}>
          <img className="w-48 lg:w-auto" src="/logo.webp" />
        </Link>

        <ul className="flex w-full flex-wrap justify-around gap-x-4 text-lg text-[#0B1E5B] lg:w-auto lg:justify-between lg:gap-x-12">
          <li className="">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/#initiatives"}>Initiatives</Link>
          </li>

          <li className="block lg:hidden">
            <Link href={"/support"}>Support</Link>
          </li>
        </ul>

        <Link
          href={"/support"}
          className="hidden rounded-full border border-[#F6A290] px-4 py-3 text-lg font-bold lg:block"
        >
          Support Us
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
