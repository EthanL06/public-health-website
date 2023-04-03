type Props = {};
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-4">
      <Navbar />
      <div className="relative mb-8">
        <h1 className="mt-6 text-center text-5xl font-bold tracking-wider">
          About Us
        </h1>

        <div className="absolute -top-2 -right-20 hidden lg:block">
          <img src="/underline.png" />
        </div>
      </div>

      <div className="mt-7 flex grid-cols-3 grid-rows-1 flex-wrap justify-center gap-4 lg:grid">
        <div className="flex flex-col items-start justify-between rounded-[1rem] border-4 border-white bg-[#FFE8D3] p-6">
          <img className="h-auto w-full rounded-[0.5rem]" src="/sanjay.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider">
              Sanjay Krishna
            </h2>
          </div>

          <a
            href="mailto:sanju.krishna131@gmail.com"
            className="mt-4 underline"
          >
            sanju.krishna131@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-start justify-between rounded-[1rem] border-4 border-white bg-[#F6D1CC] p-6">
          <img className="h-auto w-full rounded-[0.5rem]" src="/anagha.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider">Anagha Menon</h2>
          </div>

          <a href="mailto:anaghamenon8@gmail.com" className="mt-4 underline">
            anaghamenon8@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-start justify-between rounded-[1rem] border-4 border-white bg-[#CFF0F9] p-6">
          <img className="h-auto w-full rounded-[0.5rem]" src="/shaunak.png" />
          <div>
            <h3 className="mt-4 text-base font-semibold  opacity-80">
              Co-Founder
            </h3>
            <h2 className="text-2xl font-bold tracking-wider">Shaunak Kapur</h2>
          </div>

          <a href="mailto:shaunak1206@gmail.com" className="mt-4 underline">
            shaunak1206@gmail.com
          </a>
        </div>
      </div>

      <article className="prose mt-[15vh] max-w-2xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide">
        <h1>How we started.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>

      <article className="prose mt-[15vh]  mb-[10vh]  max-w-2xl px-4 text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide">
        <h1>Why we started.</h1>
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
export default About;
