"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { FormEvent, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Input } from "../ui/inputs";
import { Label } from "../ui/label";
import { Textarea } from "../ui/inputs/textarea";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL;
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const submitUrl = useMemo(() => {
    if (apiBaseUrl) {
      return `${apiBaseUrl.replace(/\/$/, "")}/contact-us`;
    }

    return "http://localhost:8000/api/contact-us";
  }, [apiBaseUrl]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    if (!fullName || !form.email || !form.message) {
      toast.error("Please complete all required fields.");
      return;
    }

    if (!turnstileSiteKey) {
      toast.error("Turnstile is not configured.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please complete the captcha challenge.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
          captcha: captchaToken,
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.message || "Unable to send message.");
      }

      toast.success(
        payload?.message ||
          "Message sent successfully. Our team will contact you shortly.",
      );

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setCaptchaToken(null);
      setCaptchaResetKey((prev) => prev + 1);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-4 pb-12 bg-primary/30 relative" id="contact">
      <div className="wrapper">
        <div className="relative max-w-[800px] mx-auto">
          <div className="contact-wrapper p-14 relative border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-gray-800 font-bold text-3xl mb-2">
                Need any Help? Get in touch 👋
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={(event) =>
                      updateField("firstName", event.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={(event) =>
                      updateField("lastName", event.target.value)
                    }
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                  />
                </div>
                <div className="col-span-full">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message"
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                  />
                </div>
                <input
                  type="text"
                  name="company_name"
                  style={{ display: "none" }}
                ></input>
                <div className="col-span-full flex justify-center overflow-hidden rounded-xl">
                  {turnstileSiteKey ? (
                    <Turnstile
                      key={captchaResetKey}
                      siteKey={turnstileSiteKey}
                      onSuccess={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken(null)}
                    />
                  ) : (
                    <p className="text-sm text-red-600 mb-0">
                      Captcha is unavailable. Set
                      NEXT_PUBLIC_TURNSTILE_SITE_KEY.
                    </p>
                  )}
                </div>
                <div className="flex justify-center col-span-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue hover:bg-primary-600 transition h-12 py-3 px-6 w-full font-medium text-white text-sm rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <span className="absolute -top-32 right-2/3 -trtanslate-x-1/2 z-0">
        <svg
          width="930"
          height="760"
          viewBox="0 0 930 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_9248_10254)">
            <circle cx="380.335" cy="380.335" r="179.665" fill="#FF58D5" />
          </g>
          <g opacity="0.7" filter="url(#filter1_f_9248_10254)">
            <circle cx="549.665" cy="380.335" r="179.665" fill="#4E6EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_9248_10254"
              x="0.669922"
              y="0.6698"
              width="759.33"
              height="759.33"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_9248_10254"
              />
            </filter>
            <filter
              id="filter1_f_9248_10254"
              x="170"
              y="0.6698"
              width="759.33"
              height="759.33"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_9248_10254"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </section>
  );
}
