type Props = {};
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const About = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-4">
      <Navbar />
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-4xl  lg:text-5xl font-bold tracking-wider "
        >
          About Us
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

      <div className="mt-12 flex grid-cols-3 grid-rows-1 flex-wrap justify-center gap-4 lg:grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between rounded-[1rem]  bg-[#858484] p-4"
        >
          <img className="h-auto w-full rounded-[0.5rem]" src="/sanjay.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  text-white opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              Sanjay Krishna
            </h2>
          </div>

          <a
            href="mailto:sanju.krishna131@gmail.com"
            className="mt-4 text-white underline"
          >
            sanju.krishna131@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between rounded-[1rem] bg-[#E96E33] p-4"
        >
          <img className="h-auto w-full rounded-[0.5rem]" src="/anagha.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  text-white opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              Anagha Menon
            </h2>
          </div>

          <a
            href="mailto:anaghamenon8@gmail.com"
            className="mt-4 text-white underline"
          >
            anaghamenon8@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between rounded-[1rem]  bg-[#43798A] p-4"
        >
          <img className="h-auto w-full rounded-[0.5rem]" src="/shaunak.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  text-white opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              Shaunak Kapur
            </h2>
          </div>

          <a
            href="mailto:shaunak1206@gmail.com"
            className="mt-4 text-white underline"
          >
            shaunak1206@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="prose mt-[15vh] max-w-2xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide"
      >
        <h1>How we started.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="prose mt-[15vh]  mb-[10vh]  max-w-2xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide"
      >
        <h1>Why we started.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </motion.article>

      <Footer />
    </div>
  );
};
export default About;
