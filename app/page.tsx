"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Download App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "Choose Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "Get Amazing Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

export default function Home() {
  // === INCOMING ANIMATION LOGIC ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("!opacity-100", "!translate-y-0");
          }
        });
      },
      {
        threshold: 0.2, // trigger when 20% of section is visible
        rootMargin: "0px 0px -80px 0px",
      },
    );

    const animatedSections = document.querySelectorAll(".animate-on-scroll");
    animatedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* HERO SECTION - Fixed Version */}
        <header className="relative min-h-screen overflow-hidden animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          {" "}
          {/* Background Image - Full Screen */}
          <div className="absolute inset-0 z-0">
            <Image
              src="./images/hero_banner_background.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* NAVBAR */}
          <nav className="relative z-50 w-full bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Logo - Left Side */}
              <div className="flex items-center gap-3">
                <div className="relative w-44 h-12">
                  {" "}
                  {/* ← Bigger container */}
                  <Image
                    src="./images/plan_a_wedding_logo.svg"
                    alt="Plan A Wedding Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Menu - Center on large screens */}
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a
                  href="#couple-app"
                  className="hover:text-purple-600 transition-colors"
                >
                  For Couple
                </a>
                <a
                  href="#business-app"
                  className="hover:text-purple-600 transition-colors"
                >
                  For Business
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-purple-600 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#about"
                  className="hover:text-purple-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#blog"
                  className="hover:text-purple-600 transition-colors"
                >
                  Blog
                </a>
              </div>

              {/* Get In Touch Button - Right Side */}
              <button
                className="bg-linear-to-r from-[#863AC1] to-[#BA8EFA]
                      hover:from-[#7A2EB8] hover:to-[#B07EF0]
                      text-white
                      px-8 py-3.5
                      rounded-3xl
                      text-sm. font-semibold
                      transition-all duration-300
                      flex items-center gap-2
                      shadow-lg shadow-[#863AC1]/30
                      hover:shadow-xl hover:shadow-[#863AC1]/40
                      active:scale-95"
              >
                Get In Touch
              </button>
            </div>
          </nav>
          {/* Main Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-24 min-h-screen flex items-center">
            <div className="grid md:grid-cols-1 items-center w-full">
              <div className="space-y-8">
                <div className="font-inter text-[86px] md:text-[86px] leading-none tracking-tighter font-medium text-black text-center">
                  The Operating System for Weddings
                </div>

                <p className="font-inter text-[24px] md:text-[24px] text-black font-regular text-center">
                  If you're planning your big day or running a wedding business,
                  our technology keeps everything synced, streamlined and
                  stress-free.
                </p>

                {/* Updated Hero Buttons - Replace the entire flex div with buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#business-app"
                    className="bg-gradient-to-r from-[#863AC1] to-[#BA8EFA]
                hover:from-[#7A2EB8] hover:to-[#B07EF0]
                text-white
                px-8 py-3.5
                rounded-4xl
                text-sm font-semibold
                transition-all duration-300
                flex items-center gap-2
                shadow-lg shadow-[#863AC1]/30
                hover:shadow-xl hover:shadow-[#863AC1]/40
                active:scale-95"
                  >
                    Business App
                  </a>
                  <a
                    href="#couple-app"
                    className="bg-white
                text-[#863AC1]
                px-8 py-3.5
                rounded-4xl
                text-sm font-semibold
                transition-all duration-300
                flex items-center gap-2
                hover:shadow-xl hover:shadow-[#863AC1]/40
                active:scale-95"
                  >
                    Couple App
                  </a>
                </div>

                <div className="relative mx-auto max-w-[590px]">
                  <Image
                    src="./images/hero_phone.png"
                    alt="Hero Phone"
                    width={590}
                    height={785}
                    className="object-contain mask-[linear-gradient(to_bottom,black_70%,transparent_95%)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* WHAT WE OFFER / FEATURES */}
        <section className="max-w-7xl bg-white mx-auto px-6 py-20 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left Section - Spans roughly half width */}
            <div className="w-full md:w-[50%] mt-8">
              {/* "What We Offer" Row */}
              <div className="flex items-center gap-[10px] mb-4">
                {/* Circle Component */}
                <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                  <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                </div>

                <span className="font-inter text-black font-bold text-[18px]">
                  What We Offer
                </span>
              </div>

              <h2 className="font-inter text-[35px] leading-tight text-black font-bold mb-8">
                We Give The Best Features
              </h2>

              {/* Image Container - Fixed height/width for non-fill images */}
              <div className="relative w-full">
                <Image
                  src="./images/what_we_offer_phone.png"
                  alt="Features"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Contact Form - Fixed width for the form side */}
            <div className="w-full md:w-[45%] bg-white rounded-3xl  p-8 border border-[#E1D7E9]">
              <div className="flex items-center gap-[10px] mb-4">
                {/* Circle Component */}
                <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                  <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                </div>

                <span className="font-inter text-black font-bold text-[18px]">
                  Write A Message
                </span>
              </div>
              <h3 className="font-inter text-[35px] text-black font-bold ">
                Leave A Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-[18px] text-black font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-[#E1D7E9] bg-white rounded-4xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-[18px] text-black font-bold">
                      {" "}
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border border-[#E1D7E9] bg-white rounded-4xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-[18px] text-black font-bold">
                      {" "}
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-[#E1D7E9] bg-white rounded-4xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-[18px] text-black font-bold">
                      {" "}
                      Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full border border-[#E1D7E9] bg-white rounded-4xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-[18px] text-black font-bold">
                    {" "}
                    Message
                  </label>
                  <textarea
                    placeholder="Your Comment"
                    rows={4}
                    className="w-full border border-[#E1D7E9] bg-white rounded-4xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#863AC1] to-[#BA8EFA] hover:opacity-90 text-white py-5 rounded-3xl text-lg font-semibold shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BUSINESS APP + PRICING */}
        <section
          id="business-app"
          className="bg-gray-50 py-20 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          {" "}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-16">
              {/* Left Text */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-[10px] mb-4">
                  {/* Circle Component */}
                  <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                    <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                  </div>

                  <span className="font-inter text-black font-bold text-[18px]">
                    Business App
                  </span>
                </div>
                <h2 className="font-inter text-[35px] text-black font-bold">
                  We Give The Best Price
                </h2>
                <div className="mt-5 space-y-8 items-start">
                  <div className="flex gap-6 items-center">
                    {" "}
                    <div className="flex-shrink-0">
                      {" "}
                      {/* prevents the icon from squishing */}
                      <Image
                        src="./images/100_percent_guarantee.svg"
                        alt="100% Guarantee"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-black">
                        100% Guarantee
                      </div>
                      <div className="text-sm text-gray-500">
                        Best quality leads
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    {" "}
                    <div className="flex-shrink-0">
                      {" "}
                      {/* prevents the icon from squishing */}
                      <Image
                        src="./images/customer_support.svg"
                        alt="100% Guarantee"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-black">
                        24/7 Support
                      </div>
                      <div className="text-sm text-gray-500">
                        Connect with us easily
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const userAgent = navigator.userAgent.toLowerCase();
                    const isApple = /iphone|ipad|macintosh/.test(userAgent);

                    if (isApple) {
                      window.open(
                        "https://apps.apple.com/in/app/plan-a-wedding-business/id6476916891",
                        "_blank",
                      );
                    } else {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.wedding.planner&pcampaignid=web_share",
                        "_blank",
                      );
                    }
                  }}
                  className="bg-linear-to-r from-[#863AC1] to-[#BA8EFA]
                      hover:from-[#7A2EB8] hover:to-[#B07EF0]
                      text-white
                      px-8 py-3.5
                      rounded-3xl
                      mt-10
                      text-sm. font-semibold
                      transition-all duration-300
                      flex items-center gap-2
                      shadow-lg shadow-[#863AC1]/30
                      hover:shadow-xl hover:shadow-[#863AC1]/40
                      active:scale-95"
                >
                  Download App
                </button>
              </div>

              {/* Pricing Cards */}
              <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Premium Card */}
                <div className="bg-linear-to-r from-[#BA8EFA]/75 to-[#863AC1]/90 rounded-3xl p-8 shadow-lg border border-purple-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-mulish text-[22px] font-bold text-white">
                        Premium
                      </div>
                    </div>
                    <div className="bg-purple-100 text-purple-700 text-xs px-4 py-1 rounded-3xl">
                      Most Popular
                    </div>
                  </div>
                  <div className="mt-7 mb-7 w-full h-[1px] rounded-full bg-[#FFFFFF]/22" />
                  <ul className=" space-y-4 text-sm">
                    <li className="flex items-center gap-2 font-inter text-white text-[16px] font-regular">
                      ✔ Professional Advice
                    </li>
                    <li className="flex items-center gap-2 font-inter text-white text-[16px] font-regular">
                      ✔ Auto Investing
                    </li>
                    <li className="flex items-center gap-2 font-inter text-white text-[16px] font-regular">
                      ✔ No Account Limits
                    </li>
                    <li className="flex items-center gap-2 font-inter text-white text-[16px] font-regular">
                      ✔ Cashback Guarantee
                    </li>
                    <li className="flex items-center gap-2 font-inter text-white text-[16px] font-regular">
                      ✔ 24/7 Customer Support
                    </li>
                  </ul>
                  <div className="flex items-end">
                    <div className="mt-5 mb-5 font-inter text-white text-[35px] font-bold">
                      ₹1,999
                    </div>
                    <div className="mt-5 mb-7 font-inter text-white text-[16px] font-regular">
                      /Annually
                    </div>
                  </div>

                  <button className="w-full bg-white text-[#863AC1] py-4 rounded-4xl font-semibold">
                    Purchase Now
                  </button>
                </div>

                {/* Personal Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-mulish text-[22px] font-bold text-black">
                        Personal
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 mb-7 w-full h-[1px] rounded-full bg-[#E1D7E9]" />
                  <ul className=" space-y-4 text-sm">
                    <li className="flex items-center gap-2 font-inter text-[16px]">
                      <span className="text-[#863AC1] font-bold">✔</span>

                      <span className="text-[#787778] font-regular">
                        Basic Advice
                      </span>
                    </li>
                    <li className="flex items-center gap-2 font-inter text-[16px]">
                      <span className="text-[#863AC1] font-bold">✔</span>
                      <span className="text-[#787778] font-regular">
                        Auto Investing
                      </span>
                    </li>
                    <li className="flex items-center gap-2 font-inter text-[16px]">
                      <span className="text-[#863AC1] font-bold">✔</span>
                      <span className="text-[#787778] font-regular">
                        No Account Limits
                      </span>
                    </li>
                    <li className="flex items-center gap-2 font-inter text-[16px]">
                      <span className="text-[#863AC1] font-bold">✔</span>
                      <span className="text-[#787778] font-regular">
                        Cashback Guarantee
                      </span>
                    </li>
                    <li className="flex items-center gap-2 font-inter text-[16px]">
                      <span className="text-[#863AC1] font-bold">✔</span>
                      <span className="text-[#787778] font-regular">
                        24/7 Customer Support
                      </span>
                    </li>
                  </ul>
                  <div className="flex items-end">
                    <div className="mt-5 mb-5 font-inter text-black text-[35px] font-bold">
                      ₹499
                    </div>
                    <div className="mt-5 mb-7 font-inter text-[#863AC1] text-[16px] font-regular">
                      /Annually
                    </div>
                  </div>

                  <button className="w-full bg-linear-to-r from-[#863AC1] to-[#BA8EFA] text-white py-4 rounded-4xl font-semibold">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUPLE APP + 4 STEPS */}
        <section
          id="couple-app"
          className="max-w-7xl bg-white px-6 py-20 items-center mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Phone */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative items-center">
                <Image
                  src="./images/4_steps.svg"
                  alt="Quick Steps"
                  width={428}
                  height={428}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="md:col-span-6 items-start">
              <div className="flex items-center gap-[10px] mb-4">
                {/* Circle Component */}
                <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                  <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                </div>

                <span className="font-inter text-black font-bold text-[18px]">
                  Couple App
                </span>
              </div>
              <h2 className="font-inter text-[35px] text-black font-bold">
                4 Quick Steps To Use Our Services
              </h2>

              <div className="mt-4 max-w-2xl mx-auto ">
                <div className="space-y-0">
                  {steps.map((step, index) => (
                    <div key={index} className="flex group">
                      {/* Left Side: The Line and Dot */}
                      <div className="flex flex-col items-center mr-6">
                        {/* The Dot */}
                        <div className="mt-2 w-4 h-4 rounded-full bg-[#863AC1] z-10 shrink-0" />

                        {/* The Vertical Dotted Line */}
                        {/* We hide the line for the last item */}
                        {index !== steps.length - 1 && (
                          <div className="w-px h-full border-l-2 border-dashed border-purple-400 my-1" />
                        )}
                      </div>

                      {/* Right Side: Text Content */}
                      <div className="pb-12">
                        <h3 className="font-mulish text-[22px] text-black font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="font-inter font-regular text-[16px] text-gray-500 text-lg leading-relaxed max-w-lg">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const userAgent = navigator.userAgent.toLowerCase();
                  const isApple = /iphone|ipad|macintosh/.test(userAgent);

                  if (isApple) {
                    window.open(
                      "https://apps.apple.com/in/app/plan-a-wedding/id6698875431",
                      "_blank",
                    );
                  } else {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.planawedding.customer&pcampaignid=web_share",
                      "_blank",
                    );
                  }
                }}
                className="bg-linear-to-r from-[#863AC1] to-[#BA8EFA]
                      hover:from-[#7A2EB8] hover:to-[#B07EF0]
                      text-white
                      px-8 py-3.5
                      rounded-3xl
                      text-sm. font-semibold
                      transition-all duration-300
                      flex items-center gap-2
                      shadow-lg shadow-[#863AC1]/30
                      hover:shadow-xl hover:shadow-[#863AC1]/40
                      active:scale-95"
              >
                Download App
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section
          id="testimonials"
          className="bg-white py-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          {" "}
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#F6F5F9] grid md:grid-cols-2 gap-12 items-start p-12 rounded-[47]">
              <div className="bg-white rounded-[35px] p-8 border-[#E1D7E9] ">
                <div className="relative">
                  <Image
                    src="./images/five_stars.svg"
                    alt="Five Stars"
                    width={116}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-gray-300 rounded-[44px]">
                      <Image
                        src="./images/maeve_ritter.svg"
                        alt="Maeve Ritter"
                        width={88}
                        height={88}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-black">
                        Maeve Ritter
                      </div>
                      <div className="text-xs text-gray-400">Happy Couple</div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="./images/quote.svg"
                      alt="Five Stars"
                      width={65}
                      height={65}
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="mt-6 font-inter text-[18px] text-[#787778] font-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[10px] mb-4">
                  {/* Circle Component */}
                  <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                    <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                  </div>

                  <span className="font-inter text-black font-bold text-[18px]">
                    Testimonial
                  </span>
                </div>
                <div className="font-inter font-bold text-[35px] text-sm text-black">
                  What Our Clients Said
                </div>
                <div className="text-inter text-[18px] text-[#787778] font-regular mt-3">
                  Lorem ipsum dolor sit amet, consectete adipiscing elit, sed
                  dolore eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ullamco laboris nisi eiusmod tempor incididunt.Lorem
                  ipsum dolor sit amet, consectete adipiscing elit, sed dolore
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ullamco laboris nisi eiusmod tempor incididunt.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section
          id="blog"
          className="max-w-7xl mx-auto px-6 py-20 items-center bg-white animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          <div className="flex items-center flex-col mb-10">
            <div className="flex items-center gap-[10px] mb-4">
              {/* Circle Component */}
              <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
              </div>

              <span className="font-inter text-black font-bold text-[18px]">
                Our Blog
              </span>
            </div>
            <h2 className="font-inter text-[35px] font-bold text-black text-4xl ">
              Latest Blog &amp; Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "The Impact Of Online Payments Will Make All Banks Use ATMs",
                subtitle:
                  "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
                imgId: "./images/bank_img.svg",
              },
              {
                title:
                  "Is Now A Good Time To Worry More About Financial Inflation",
                subtitle:
                  "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
                imgId: "./images/inflation_img.svg",
              },
              {
                title:
                  "New SaaS Online Payment Platform Raises $15 Million Per Year",
                subtitle:
                  "Lorem ipsum dolor sit amet conset atetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",

                imgId: "./images/economy_img.svg",
              },
            ].map((post) => (
              <div key={post.title} className="group">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src={post.imgId}
                    alt={post.title}
                    width={600}
                    height={380}
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 font-inter text-[25px] text-black font-bold leading-tight">
                  {post.title}
                </div>
                <div className="mt-2 font-inter text-[18px] text-[#787778] font-regular leading-tight">
                  {post.subtitle}
                </div>
                <div className="font-inter text-[18px] text-[#863AC1] font-bold mt-4">
                  Read More →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS + ABOUT */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-6 py-20 bg-white animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          {" "}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT: Overlapping Images */}
            <div className="relative items-center">
              {/* Main Large Image */}
              <div className="relative z-10 overflow-hidden rounded-[47px]">
                <Image
                  src="./images/main_person.svg"
                  alt="Main person"
                  width={565}
                  height={761}
                  className="object-cover h-auto"
                />
              </div>

              {/* Smaller Overlapping Image (Bottom Left) */}
              <div className="absolute bottom-8 -left-24 z-20 w-2/3 rounded-[47px] overflow-hidden  hidden md:block">
                <Image
                  src="./images/secondary_person.svg"
                  alt="Secondary person"
                  width={348}
                  height={464}
                />
              </div>

              {/* Purple Badge (Overlapping) */}
              <div className="absolute bg-linear-to-r from-[#BA8EFA] to-[#863AC1] bottom-10  z-30 text-white p-1 rounded-full w-50 h-50 flex flex-col items-center justify-center text-center shadow-lg left-1/4">
                <span className="font-mulish font-bold text-[42px] ">
                  1,485+
                </span>
                <span className="font-mulish text-[19px] text-white font-regular ">
                  Trusted Clients
                </span>
              </div>
            </div>

            {/* RIGHT: Text Content */}
            <div>
              <div className="flex items-center gap-[10px] mb-4">
                {/* Circle Component */}
                <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full border-2 border-[#863AC1] shrink-0">
                  <div className="w-[5] h-[5px] rounded-full bg-[#863AC1]" />
                </div>

                <span className="font-inter text-black font-bold text-[18px]">
                  About Company
                </span>
              </div>
              <h2 className="font-inter font-bold text-[35px] text-black mb-6 leading-tight">
                We Are The Best Online Payment Gateway Agency
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                minim veniam.
              </p>

              {/* Feature List */}
              <div className="space-y-8">
                {[
                  {
                    title: "Trusted Partner",
                    img: "./images/trusted_partner.svg",
                  },
                  {
                    title: "Fastpace Platform",
                    img: "./images/fastpace_platform.svg",
                  },
                  {
                    title: "Tested Reliability",
                    img: "./images/trusted_reliability.svg",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm text-2xl`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={78}
                        height={78}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-mulish text-[22px] text-black font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="font-inter font-regular text-[#787778] text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris minim veniam.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 2. STATS BAR (Bottom) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
            {[
              { label: "Registered Couples", value: "40,000+" },
              { label: "Registered Businesses", value: "31,452+" },
              { label: "Weddings Executed", value: "15,000+" },
              { label: "Cities", value: "592+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-inter font-bold text-black text-4xl  mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-[19px] font-regular text-[#787778] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}

        <footer
          className="relative bg-cover bg-center bg-no-repeat text-white py-16 h-screen flex flex-col justify-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${process.env.NODE_ENV === "production" ? "/paw-website" : ""}/images/footer.png)`,
          }}
        >
          {" "}
          {/* Optional: Add an overlay if the image makes the white text hard to read */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              {/* LEFT COLUMN: Logo & Info */}
              <div className="flex flex-col max-w-md">
                <div className="flex items-center text-white">
                  <Image
                    src="./images/paw_logo_black.svg"
                    alt="Paw logo"
                    width={249}
                    height={75}
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 text-black font-inter font-normal text-sm leading-relaxed max-w-xs">
                  If you're planning your big day or running a wedding business,
                  our technology keeps everything synced, streamlined and
                  stress-free.
                </p>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Image
                      src="./images/mail.svg"
                      alt="Email"
                      height={16}
                      width={16}
                      className="shrink-0"
                    />
                    <span className="ml-3 font-inter text-black text-[16px]">
                      enquiry@planawedding.in
                    </span>
                  </div>

                  <div className="flex items-start">
                    {" "}
                    {/* Use items-start for long addresses */}
                    <Image
                      src="./images/location.svg"
                      alt="Location"
                      height={16}
                      width={16}
                      className="shrink-0 mt-1"
                    />
                    <span className="ml-3 font-inter text-black text-[16px] leading-snug">
                      NR SQUARE #145, 2nd floor, Sirsi circle, Chamrajpet,
                      Bangalore, Karnataka - 560018
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Links Grid */}
              <div className="grid grid-cols-2 gap-12 sm:gap-24">
                {/* Explore */}
                {/* Updated Footer Explore Section - Replace the entire Explore div */}
                <div className="flex flex-col">
                  <div className="font-inter font-bold text-black text-[18px] mb-6">
                    Explore
                  </div>
                  <div className="flex flex-col space-y-3 font-inter text-black text-[16px]">
                    <a
                      href="#couple-app"
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      For Couples
                    </a>
                    <a
                      href="#business-app"
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      For Business
                    </a>
                    <a
                      href="#about"
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      About Us
                    </a>
                    <a
                      href="#testimonials"
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      Testimonials
                    </a>
                    <a
                      href="#blog"
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      Blogs
                    </a>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="flex flex-col">
                  <div className="font-inter font-bold text-black text-[18px] mb-6">
                    Social Connect
                  </div>
                  <div className="space-y-3 font-inter text-black text-[16px]">
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/planaweddingplatform",
                          "_blank",
                        );
                      }}
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      Facebook
                    </div>
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/planawedding.in/?igsh=MWVqMXQ2aTd0emRndw%3D%3D&utm_source=qr#",
                          "_blank",
                        );
                      }}
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      Instagram
                    </div>
                    <div
                      onClick={() => {
                        window.open("https://x.com/planawedding_in", "_blank");
                      }}
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      X
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 relative">
              <Image
                src="./images/paw_logo_big.svg"
                alt="Paw Logo"
                width={1280}
                height={388}
                className="object-contain"
              />
            </div>
            <div className="mt-5 flex flex-row justify-between">
              <div className="font-inter text-[16px] font-regular text-black">
                © 2026 planawedding. All Rights Reserved.
              </div>
              <div className=" flex flex-row justify-end">
                <div
                  onClick={() => {
                    window.open(
                      "https://planawedding.in/termsandconditions",
                      "_blank",
                    );
                  }}
                  className="font-inter text-[16px] font-regular text-black hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Terms of Services
                </div>
                <div className="mx-5 font-inter text-[16px] font-regular text-black">
                  |
                </div>
                <div
                  onClick={() => {
                    window.open(
                      "https://planawedding.in/privacypolicy",
                      "_blank",
                    );
                  }}
                  className="font-inter text-[16px] font-regular text-black hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
