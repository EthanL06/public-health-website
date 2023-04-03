import Image from "next/image";
import Link from "next/link";

type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className="mt-4 flex w-full max-w-4xl flex-col items-center">
      <div className="flex gap-x-5">
        <button>
          <Image alt="instagram" src="/insta.svg" width={40} height={40} />
        </button>
        <button>
          <Image alt="mail" src="/envelope.svg" width={40} height={40} />
        </button>
      </div>

      <div className="mt-3 flex w-full max-w-2xl flex-wrap justify-around gap-x-4 text-lg font-medium text-[#0B1E5B]">
        <Link className="text-[#0B1E5B]" href="/">
          Home
        </Link>
        <Link className="text-[#0B1E5B]" href="/about">
          About Us
        </Link>
        <Link className="text-[#0B1E5B]" href="/#initiatives">
          Initiatives
        </Link>
        <Link className="text-[#0B1E5B]" href="/support">
          Support
        </Link>
      </div>

      <div className="mt-3 mb-4 w-full">
        <hr className="w-full border border-[#0B1E5B]" />

        <p className="mt-5 text-center text-[#0B1E5B]">
          © 2023 Let&apos;s Learn About Public Health! All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
