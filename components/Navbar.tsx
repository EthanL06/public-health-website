import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

type Props = {};
const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);

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
            <button
              onClick={() => {
                setShow(!show);
              }}
              onMouseOver={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              Initiatives
            </button>

            {show && (
              <div
                onMouseLeave={() => {
                  setShow(false);
                }}
                onMouseOver={() => {
                  setShow(true);
                }}
                className="bg-white absolute rounded flex flex-col z-10 gap-y-2"
              >
                <Link
                  href={"/initiatives/boyscouts"}
                  className="hover:bg-black/10 overflow-clip p-3 "
                >
                  Boy Scouts
                </Link>
                <Link
                  href={"/initiatives/legislation"}
                  className="hover:bg-black/10 overflow-clip p-3"
                >
                  Legislation
                </Link>
                <Link
                  href={"/initiatives/presentation"}
                  className="hover:bg-black/10 overflow-clip p-3"
                >
                  Presentation
                </Link>
                <Link
                  href={"/initiatives/books"}
                  className="hover:bg-black/10 overflow-clip p-3"
                >
                  Books
                </Link>
              </div>
            )}
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
