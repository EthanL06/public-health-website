import "react-responsive-carousel/lib/styles/carousel.min.css";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-6 lg:p-4">
      <Navbar />

      <div className="flex flex-col items-center  gap-y-12">
        <div className="relative">
          <h1 className="mt-12  lg:mt-8 lg:mb-2 max-w-3xl text-center text-2xl font-bold  sm:text-4xl lg:max-w-none lg:text-5xl">
            The Health Education Project
          </h1>

          <p className="text-center mt-6 font-medium text-lg">
            Empowering communities and teaching life-saving skills through
            public health outreach
          </p>

          <div className="absolute -top-2 -right-16 hidden lg:block">
            <img src="/underline.png" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-12 lg:mt-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
          <div>
            <Carousel showStatus={false}>
              <div>
                <img src="https://cdn.britannica.com/72/126772-050-BC651FF5/Norwich-University-Hospital-Norfolk-England-National-Health.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="https://cdn.britannica.com/72/126772-050-BC651FF5/Norwich-University-Hospital-Norfolk-England-National-Health.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="https://cdn.britannica.com/72/126772-050-BC651FF5/Norwich-University-Hospital-Norfolk-England-National-Health.jpg" />
                <p className="legend">Legend 1</p>
              </div>
            </Carousel>
          </div>
          <div className="flex max-w-2xl flex-col lg:max-w-none">
            <h2 className="mb-4 text-center text-3xl font-bold lg:text-left">
              Mission Statement
            </h2>
            <p className=" text-center font-medium leading-9  lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="my-4 mb-20 hidden items-center gap-x-2 lg:flex">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <div className="mt-32 flex flex-col items-center gap-y-6 lg:mt-0">
        <h2 id="initiatives" className=" text-4xl font-extrabold ">
          Our Initiatives
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 max-w-lg lg:max-w-none">
          <div className="flex w-full h-[400px] lg:w-[400px] flex-col items-center justify-around rounded-[1rem] border-4 border-white bg-[#CFF0F9] p-4">
            <h3 className=" text-3xl font-bold ">Boy Scouts</h3>
            <p className="text-center font-medium leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <Link
              href={"initiatives/boyscouts"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium"
            >
              Learn More
            </Link>
          </div>

          <div className="flex w-full h-[400px] lg:w-[400px] flex-col items-center justify-around rounded-[1rem] border-4 border-white bg-[#F6D1CC] p-4">
            <h3 className=" text-3xl font-bold ">Legislation</h3>
            <p className="text-center font-medium leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <Link
              href={"initiatives/legislation"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium"
            >
              Learn More
            </Link>
          </div>

          <div className="border-whit flex w-full h-[400px] lg:w-[400px] flex-col items-center justify-around rounded-[1rem] border-4 border-white bg-[#FFF7AE] p-4">
            <h3 className=" text-3xl font-bold ">Presentation</h3>
            <p className="text-center font-medium leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <Link
              href={"initiatives/presentation"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium"
            >
              Learn More
            </Link>
          </div>

          <div className="border-whit flex w-full h-[400px] lg:w-[400px] flex-col items-center justify-around rounded-[1rem] border-4 border-white bg-[#C3D69B] p-4">
            <h3 className=" text-3xl font-bold ">Books</h3>
            <p className="text-center font-medium leading-9 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <Link
              href={"initiatives/books"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="invisible flex gap-x-2">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <div className="my-16 flex w-full flex-wrap items-center justify-around gap-4 rounded-[1rem] bg-[#FFE8D3] py-14">
        <h1 className="text-center text-3xl font-extrabold ">
          Want to help out?
        </h1>

        <Link
          href={"/support"}
          className="rounded-full bg-white px-4 py-3 text-lg font-bold"
        >
          Support Us
        </Link>
      </div>

      <div className="invisible flex gap-x-2">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <Footer />
    </div>
  );
}
