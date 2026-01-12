import Image from "next/image";
import bannerImage from "../../../public/assets/banner/dashboard.png";
import Link from "next/link";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image space-y-5">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96 md:w-2/3 mx-auto">
              Powerful Laundry POS Software for Smarter, Faster Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray md:w-3/4 mx-auto">
              Manage orders, track payments, monitor staff, and grow your
              laundry business — all in one simple dashboard.
            </p>
          </div>

          {/* <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              See our portfolio
            </button>
            <button
              type="button"
              className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              More info
            </button>
          </div> */}

          <Image
            src={bannerImage}
            alt="banner-image"
            className="md:w-2/3 shadow-lg mx-auto rounded-lg"
          />
          <div className="flex items-center gap-5 w-fit mx-auto">
            <Link
              href="https://app.mylaundrypos.com/login"
              className="bg-white w-full text-blue border border-lightblue font-medium py-2 px-4 rounded flex justify-center items-center"
            >
              Sign In
            </Link>
            <Link
              href="https://app.mylaundrypos.com/register"
              className="bg-lightblue w-full min-w-fit hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded flex justify-center items-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
