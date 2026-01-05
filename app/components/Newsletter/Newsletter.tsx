"use client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const brevoUrl = process.env.NEXT_PUBLIC_BREVO_URL;
      
      if (!brevoUrl) {
        toast.error("Newsletter service not configured");
        setLoading(false);
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY || "";
      const response = await fetch(brevoUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      console.log(data);
      setEmail("");
      toast.success("Thanks for subscribing to our newsletter!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-34 relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <Image
                src={"/assets/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute top-10 right-0">
                <Image
                  src={"/assets/newsletter/leaf.svg"}
                  alt="leafimg"
                  width={81}
                  height={81}
                />
              </div>
              <div className="absolute bottom-8 left-2">
                <Image
                  src={"/assets/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
              Sign up to our newsletter.
            </h3>
            <h4 className="text-base font-normal mb-7 text-offwhite">
              Stay updated with the latest news and offers from Laundry POS
            </h4>
            <div className="flex gap-0">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
                placeholder="@enter email address"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg"
                onClick={handleSubmit}
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300 border-t-blue-600 animate-spin"></span>
                ) : (
                  <Image
                    src={"/assets/newsletter/plane.svg"}
                    alt="plane-img"
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
