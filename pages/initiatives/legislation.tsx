import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type Props = {};
const Legislation = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-6 lg:p-4">
      <Navbar />

      <div className="mt-6 flex w-full max-w-[65ch] gap-x-2 text-lg font-medium">
        <img className="w-4" src={"/back.svg"} />
        <Link href={"/"}>Back</Link>
      </div>
      <article className="prose mt-2  mb-12 flex-1 prose-h1:text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide prose-img:rounded-lg lg:mt-4">
        <h1>Legislation</h1>
        <img src="https://cdn.britannica.com/72/126772-050-BC651FF5/Norwich-University-Hospital-Norfolk-England-National-Health.jpg" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
      <Footer />
    </div>
  );
};
export default Legislation;
