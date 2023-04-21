import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type Props = {};
const Presentation = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-6 lg:p-4">
      <Navbar />

      <div className="mt-6 flex w-full max-w-[65ch] gap-x-2 text-lg font-medium">
        <img className="w-4" src={"/back.svg"} />
        <Link href={"/"}>Back</Link>
      </div>
      <article className="prose mt-2  mb-12 flex-1 prose-h1:text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide prose-img:rounded-lg lg:mt-4">
        <h1>Presentation</h1>

        <h3 className="text-center">
          Presentations we have delivered to individuals in greater Houston.
        </h3>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTg9T7EaJfJR6GvvvWNrB4-tDtIBVWU6E9FtlsINNB6914euzU6H_t8xyPSMY10TuoQNc6x44Tk_8hM/embed?start=false&loop=false&delayms=3000"
          allowFullScreen={true}
          className="w-full h-[25rem] rounded-lg"
        ></iframe>

        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTUzbNDMUx1O4PpTQ30JgzdSVTKxbrCIASeO0mnpV3pQj3tPgr1rDZgwchAFSLyz2XT0COmDtIXR1gx/embed?start=false&loop=false&delayms=3000"
          allowFullScreen={true}
          className="w-full h-[25rem] rounded-lg mt-4"
        ></iframe>

        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSD78FxeqlLTWDl00BBUaqyLbXqBExaNYZ4seZ_Cv9CeV9v-l4Jdwanh1SUgilzSBZDkGYAg2LArsiq/embed?start=false&loop=false&delayms=3000"
          allowFullScreen={true}
          className="w-full h-[25rem] rounded-lg mt-4"
        ></iframe>

        <p className="invisible">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <Footer />
    </div>
  );
};
export default Presentation;
