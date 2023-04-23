type Props = {};
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
const About = (props: Props) => {
  const [clickedReadMoreOne, setClickedReadMoreOne] = useState(false);
  const [clickedReadMoreTwo, setClickedReadMoreTwo] = useState(false);

  const bios = {
    anagha: {
      text: "Hi! My name is Anagha Menon and I am a junior at Seven Lakes High School. I am extremely passionate in health care practice and application. My interest in first aid stemmed from working as a patient educator at a local low income clinic, and from there I have interned at a public health research lab. I'm also currently First-Aid/CPR/AED certified through the American Red Cross. Outside of healthcare, I'm a Secretary of my grade, an Indian classical dancer, and a member of my high school varsity orchestra. This project means so much to me, and I am excited to watch it grow and save lives! Thank you for your support!",
    },
    shaunak: {
      text: "Hello My name is Shaunak Kapur! I am a junior at Seven Lakes High School, I'm involved in numerous extracurriculars including Model United Nations, Robotics, and Technology Students Association, and I am also an Eagle Scout. I helped start this organization because I recognized the importance of first-aid skills that I learned in my first-aid merit badge and I was concerned about the increasing amounts of disinformation that I saw spreading online and causing health mishaps. My goal is to expand this organization internationally and help develop curriculums for all age groups that can both accurately teach the first-aid curriculum and inform individuals on how to avoid health misinformation and consult trustable sources!",
    },
  };

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

      <div className="mt-12 flex grid-cols-2 grid-rows-1 flex-wrap justify-center gap-4 lg:grid ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between rounded-[1rem] bg-[#E96E33] p-4"
        >
          <img className="h-auto w-full rounded-[0.5rem]" src="/anagha.png" />
          <div className="h-full flex flex-col">
            <h3 className="mt-4 text-base font-semibold  text-white opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              Anagha Menon
            </h2>

            <p className="mt-2 text-white">
              {clickedReadMoreOne ? (
                bios.anagha.text
              ) : (
                <>
                  {bios.anagha.text.substring(0, 250) + "..."}
                  <button
                    onClick={() => setClickedReadMoreOne(true)}
                    className="underline"
                  >
                    Read More
                  </button>
                </>
              )}
            </p>
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
          <div className="h-full">
            <h3 className="mt-4 text-base font-semibold  text-white opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider text-white">
              Shaunak Kapur
            </h2>
            <p className="mt-2 text-white">
              {clickedReadMoreTwo ? (
                bios.shaunak.text
              ) : (
                <>
                  {bios.shaunak.text.substring(0, 250) + "..."}
                  <button
                    onClick={() => setClickedReadMoreTwo(true)}
                    className="underline"
                  >
                    Read More
                  </button>
                </>
              )}
            </p>
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
        className="prose mt-[15vh] max-w-4xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide"
      >
        <h1>How we started.</h1>
        <p>
          We began as a school club with a mission to solve a significant issue
          in our community and make a lasting impact. We quickly identified
          public health as an area where we could create meaningful change
          through numerous initiatives. By collaborating with community members,
          we developed a first-aid curriculum and provided resources to
          non-profit clinics, among other projects. Our efforts were recognized
          by the Future Problem Solvers Organization, earning us 5th place in
          Texas. Since then, we have recognized the potential of our cause and
          are now focused on expanding our efforts through new mediums and
          reaching a global audience.
        </p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="prose mt-[15vh]  mb-[10vh]  max-w-4xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide"
      >
        <h1>Why we started.</h1>
        <p>
          We focused on public health for various reasons, including the vast
          lack of knowledge on topics like first aid and the emergence of new
          health crises. For instance, we realized that a majority of the
          individuals we knew did not know how to react in emergency situations
          where individuals suffered life-threatening conditions like heart
          attacks and strokes. We recognized that addressing this uncertainty
          could save lives and prevent life-altering injuries. Moreover, with
          the emergence of public health pandemics, we saw the weaknesses that
          plagued public health systems, and how various health disparities
          exist between different populations, such as differences in access to
          healthcare, education, and resources. These disparities can lead to
          poorer health outcomes for certain groups and the rapid spread of
          disinformation.
        </p>
      </motion.article>

      <Footer />
    </div>
  );
};
export default About;
