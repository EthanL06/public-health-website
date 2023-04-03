import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {};
const Support = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-4">
      <Navbar />
      <div className="relative mb-16">
        <h1 className="mt-6 text-center text-5xl font-bold ">Support Us</h1>

        <div className="absolute -top-2 -right-20 hidden lg:block">
          <img src="/underline.png" />
        </div>
      </div>

      <div className="mt-7 mb-32 flex max-w-sm grid-cols-3 grid-rows-1 flex-1 flex-wrap justify-center gap-32 lg:gap-4 lg:grid lg:max-w-none">
        <div className="relative flex flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#FFE8D3] py-6 px-4 text-center gap-y-4">
          <img
            src="/1.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />

          <h2 className="text-center text-3xl font-bold ">Learn and Share!</h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80 ">
            Our purpose is to teach you! The best thing you could do for us is
            read our Instagram posts and share to your friends!
          </p>
          <Link
            href={"/"}
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold"
          >
            Our Posts
          </Link>
        </div>

        <div className="relative flex w-full flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#CFF0F9] py-6 px-4 text-center gap-y-4">
          <img
            src="/2.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />
          <h2 className="text-center text-3xl font-bold ">
            Attend our Events!
          </h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80">
            Coming Soon!
          </p>
          <Link
            href={"/"}
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold"
          >
            More Info
          </Link>
        </div>

        <div className="relative flex flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#F6D1CC] py-6 px-4 text-center gap-y-4">
          <img
            src="/3.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />

          <h2 className="text-center text-3xl font-bold ">
            Donate your Items!
          </h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80">
            Support our First Aid kit drive! Can&apos;t come in person to
            donate? Buy from our Amazon wishlist!
          </p>
          <Link
            href={"/"}
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold"
          >
            Amazon Wishlist
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Support;
