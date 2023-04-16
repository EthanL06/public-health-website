"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-6 lg:p-4">
      <Navbar />

      <div className="flex flex-col items-center  gap-y-12">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12  lg:mt-8 lg:mb-2 max-w-3xl text-center text-2xl font-bold  sm:text-4xl lg:max-w-none lg:text-5xl"
          >
            The Health Education Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6 font-medium text-lg"
          >
            Empowering communities and teaching life-saving skills through
            public health outreach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="absolute -top-2 -right-16 hidden lg:block"
          >
            <img src="/underline.png" />
          </motion.div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-12 lg:mt-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          <div className="flex max-w-2xl flex-col lg:max-w-none">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 text-center text-4xl font-bold lg:text-left"
            >
              Mission Statement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className=" text-center font-medium leading-9  lg:text-left"
            >
              Our mission is to protect the health of individuals both in our
              community of Greater Houston and around the world through a
              multitude of measures. We seek to address the issues that plague
              public health systems nationwide and help rewrite policy that
              ensures equitable access to quality healthcare, education, and
              prevention services for all. Our goal is to collaborate with local
              and global partners to advance research and innovation in
              healthcare, promote health literacy, and empower individuals and
              communities to make informed decisions about their health.
              Together, we can build a healthier and more resilient world!
            </motion.p>
          </div>
        </div>
      </div>

      <div className="my-4 mb-20 hidden items-center gap-x-2 lg:flex">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <div className="mt-40 flex flex-col items-center gap-y-6 lg:mt-0 ">
        <motion.h2
          id="initiatives"
          className=" text-4xl font-extrabold tracking-wider text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our Initiatives
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex h-[400px] w-full sm:w-[400px] flex-col items-center justify-around rounded-[1rem]  bg-[#858484] p-4"
          >
            <h3 className=" text-3xl font-bold tracking-wider text-white">
              Boy Scouts
            </h3>
            <p className="text-center font-medium leading-9 tracking-wide text-white">
              Information on how we worked with local Boy Scouts of America
              Troops to further our initiatives.
            </p>
            <Link
              href={"initiatives/boyscouts"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium transition-transform hover:scale-95 active:scale-90"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex h-[400px] w-full sm:w-[400px]  flex-col items-center justify-around rounded-[1rem] bg-[#e96e33] p-4"
          >
            <h3 className=" stroke-2 text-3xl font-bold tracking-wider text-white">
              Legislation
            </h3>
            <p className="text-center font-medium leading-9 tracking-wide text-white">
              How we worked with local and national governments to recognize
              weaknesses in the public health system and work towards effective
              policy
            </p>
            <Link
              href={"initiatives/legislation"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium transition-transform hover:scale-95 active:scale-90"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-whit flex h-[400px] w-full sm:w-[400px]  flex-col items-center justify-around rounded-[1rem]  bg-[#43798a] p-4"
          >
            <h3 className=" stroke-black stroke-2 text-3xl font-bold tracking-wider text-white">
              Presentation
            </h3>
            <p className="text-center font-medium leading-9 tracking-wide text-white">
              Examples of public health-centered presentations we delivered to a
              variety of audiences from elementary schoolers to adults.
            </p>
            <Link
              href={"initiatives/presentation"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium transition-transform hover:scale-95 active:scale-90"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-whit flex h-[400px] w-full sm:w-[400px]  flex-col items-center justify-around rounded-[1rem]  bg-[#6c4f3d] p-4"
          >
            <h3
              style={{
                textShadow: "#000 0px 0px 1px",
                WebkitFontSmoothing: "antialiased",
              }}
              className=" text-3xl font-bold tracking-wider text-white"
            >
              Books
            </h3>
            <p className="text-center font-medium leading-9 tracking-wide text-white">
              An educative book we developed to teach young students how to
              react and use first-aid when they encounter emergency situations.
            </p>
            <Link
              href={"initiatives/books"}
              className="rounded-full bg-white px-4 py-3 text-lg font-medium transition-transform hover:scale-95 active:scale-90"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="invisible flex gap-x-2">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="my-24 flex w-full flex-wrap items-center justify-around gap-4 rounded-[1rem] bg-[#F6D1CC] py-14"
      >
        <h1 className="text-center text-3xl font-extrabold tracking-wider">
          Want to help out?
        </h1>

        <Link
          href={"/support"}
          className="rounded-full bg-white px-4 py-3 text-lg font-bold transition-transform hover:scale-95 active:scale-90"
        >
          Support Us
        </Link>
      </motion.div>

      <div className="invisible flex gap-x-2">
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#0B1E5B]"></div>
      </div>

      <Footer />
    </div>
  );
}
