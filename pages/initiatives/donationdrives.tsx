import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type Props = {};
const DonationDrive = (props: Props) => {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center p-6 lg:p-4">
      <Navbar />

      <div className="mt-6 flex w-full max-w-[65ch] gap-x-2 text-lg font-medium">
        <img className="w-4" src={"/back.svg"} />
        <Link href={"/"}>Back</Link>
      </div>
      <article className="prose mt-2  mb-12 flex-1 prose-h1:text-center prose-p:text-base prose-p:font-medium prose-p:leading-9 prose-p:tracking-wide prose-img:rounded-lg lg:mt-4 text-center">
        <h1>Donation Drives</h1>

        <figure>
          <img src="/access_health.png" />
          <figcaption>
            <p>
              <strong>
                Access Health (non-profit clinic) Medical Supply Donation Drive
              </strong>
            </p>
          </figcaption>
        </figure>

        <figure>
          <img src="/donation.png" />
          <figcaption>
            <p>
              <strong>
                India orphanage medical/personal hygiene supply donation drive
              </strong>
            </p>
          </figcaption>
        </figure>

        <p className="invisible">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <Footer />
    </div>
  );
};
export default DonationDrive;
