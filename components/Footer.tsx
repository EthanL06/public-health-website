import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};
const Footer = (props: Props) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-4 flex w-full max-w-4xl flex-col items-center"
    >
      <div className="flex gap-x-5">
        <button className="transition-transform hover:scale-95 active:scale-90">
          <Image alt="instagram" src="/insta.svg" width={40} height={40} />
        </button>
        <button className="transition-transform hover:scale-95 active:scale-90">
          <Image alt="mail" src="/envelope.svg" width={40} height={40} />
        </button>
      </div>

      <div className="mt-3 flex w-full max-w-2xl flex-wrap justify-around gap-x-4 text-lg font-medium text-[#0B1E5B]">
        <Link className="hover-underline-animation text-[#0B1E5B]" href="/">
          Home
        </Link>
        <Link
          className="hover-underline-animation text-[#0B1E5B]"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover-underline-animation text-[#0B1E5B]"
          href="/#initiatives"
        >
          Initiatives
        </Link>
        <Link
          className="hover-underline-animation text-[#0B1E5B]"
          href="/support"
        >
          Support
        </Link>
      </div>

      <div className="mt-3 mb-4 w-full">
        <hr className="w-full border border-[#0B1E5B]" />

        <p className="mt-5 text-center text-[#0B1E5B]">
          © 2023 Let&apos;s Learn About Public Health! All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
export default Footer;
