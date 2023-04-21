import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
type Props = {};
const Support = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-4">
      <Navbar />
      <div className="relative mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-4xl  lg:text-5xl  font-bold "
        >
          Support Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="absolute -top-2 -right-20 hidden lg:block"
        >
          <img src="/underline.png" />
        </motion.div>
      </div>

      <div className="mt-7 mb-32 flex max-w-md grid-cols-3 grid-rows-1 flex-1 flex-wrap justify-center gap-20 lg:gap-4 lg:grid lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#858484] py-6 px-4 text-center gap-y-4 pt-12"
        >
          <img
            src="/1.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />

          <h2 className="text-center text-3xl font-bold text-white">
            Learn and Share!
          </h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80 text-white">
            Our purpose is to teach you! The best thing you could do for us is
            read our Instagram posts and share to your friends!
          </p>
          <Link
            href={"https://www.instagram.com/sevenlakesfps/"}
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold transition-transform hover:scale-95 active:scale-90"
          >
            Our Posts
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#EB7D45] py-6 px-4 text-center gap-y-4 pt-12"
        >
          <img
            src="/2.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />
          <h2 className="text-center text-3xl font-bold text-white">
            Attend our Events!
          </h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80 text-white">
            Coming Soon!
          </p>
          <Link
            href={"/"}
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold transition-transform hover:scale-95 active:scale-90"
          >
            More Info
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-between rounded-[1rem] border-4 border-white bg-[#43798A] py-6 px-4 text-center gap-y-4 pt-12"
        >
          <img
            src="/3.png"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />

          <h2 className="text-center text-3xl font-bold text-white">
            Donate your Items!
          </h2>
          <p className="mt-4 text-base font-semibold  leading-8  opacity-80 text-white">
            Support our First Aid kit drive! Can&apos;t come in person to
            donate? Buy from our Amazon wishlist!
          </p>
          <Link
            href={
              "https://www.amazon.com/hz/wishlist/ls/1GGMQR97BDUF3?ref_=wl_share"
            }
            className="mt-4 rounded-full bg-white  px-4 py-3 text-lg font-semibold transition-transform hover:scale-95 active:scale-90"
          >
            Amazon Wishlist
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col items-center w-full mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-4"
        >
          Get Involved
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg mb-8"
        >
          Do you want to help us out or collaborate with our organization?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[40rem] w-full"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdjMPACbksMWlcEv2If4KhNiv5mV-NgfhGoamObebsKp4LfiQ/viewform?embedded=true"
            marginheight="0"
            marginwidth="0"
            className="w-full h-[62.5rem]"
          >
            Loading…
          </iframe>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};
export default Support;
