import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo/logo.png";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: { name: string; href: string; current: boolean }[];
}

const products: ProductType[] = [
  {
    id: 1,
    link: [
      { name: "Home", href: "/", current: true },
      { name: "Features", href: "#features", current: false },
      { name: "About", href: "#about", current: false },
      { name: "Pricing", href: "#pricing", current: false },
      { name: "Screenshots", href: "#screenshots", current: false },
      { name: "Contact", href: "#contact", current: false },
    ],
  },
  //   {
  //     id: 2,
  //     link: ["Help", "Resources", "Application", "Team"],
  //   },
];

const footer = () => {
  return (
    <div className="bg-darkblue -mt-40">
      <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Image
              src={logo}
              alt="logo"
              className="pb-8 h-28 w-fit object-contain"
            />
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="footer-fb-icons">
                <Image
                  src={"/assets/footer/facebook.svg"}
                  alt="facebook"
                  width={15}
                  height={20}
                />
              </Link>
              <Link href="https://twitter.com" className="footer-icons">
                <Image
                  src={"/assets/footer/twitter.svg"}
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://instagram.com" className="footer-icons">
                <Image
                  src={"/assets/footer/instagram.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div
              key={product.id}
              className="group relative col-span-2 md:col-span-4 lg:col-span-4"
            >
              <ul>
                {product.link.map(
                  (
                    link: { name: string; href: string; current: boolean },
                    index: number
                  ) => (
                    <li key={index} className="mb-5">
                      <Link
                        href={link.href}
                        className="text-white text-sm font-normal mb-6 space-links"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <Image
                src={"/assets/footer/mask.svg"}
                alt="mask-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                10 Lanre Olumide Street, Lekki, Lagos
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Image
                src={"/assets/footer/telephone.svg"}
                alt="telephone-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                +234 809-083-9412
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Image
                src={"/assets/footer/email.svg"}
                alt="email-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                info@fortranhouse.com
              </h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            @ {new Date().getFullYear()}. All rights reserved. A product of{" "}
            <Link
              href="https://fortranhouse.com/"
              target="_blank"
              className="font-bold underline"
            >
              Fortran House Technologies
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
