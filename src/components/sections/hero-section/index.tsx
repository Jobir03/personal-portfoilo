"use client";
import Link from "next/link";
import Image from "next/image";
import { Subheading } from "./subheading";
import { useState } from "react";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="py-2 sm:py-0 relative overflow-hidden bg-white dark:bg-[#171F2E] flex">
      <div className="max-w-4xl mx-auto relative w-full py-12">
        <div className="wrapper relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-primary-300 dark:bg-primary-300 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-dark-secondary flex items-center justify-center overflow-hidden border-4 border-white dark:border-dark-primary shadow-lg">
                      {!imageError ? (
                        <Image
                          src="/images/users/jobir-ashurov.jpg"
                          alt="Jobir Ashurov"
                          width={208}
                          height={208}
                          className="w-full h-full object-cover"
                          priority
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <svg
                            className="w-20 h-20 text-gray-400 dark:text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="w-full">
                <Subheading text="Frontend Engineer & MERN Stack Developer" />

                <h1 className="text-gray-900 mx-auto font-bold mb-4 text-4xl sm:text-5xl dark:text-white leading-tight tracking-tight">
                  Jobir Ashurov
                </h1>

                <p className="max-w-[600px] mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-lg leading-relaxed mb-6 px-4">
                  Full-stack MERN Developer & Mobile Engineer with 2+ years of experience building scalable, production-ready applications using Node.js, Next.js, and React Native.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-8 text-gray-500 dark:text-gray-400 text-sm">
                  <a href="mailto:jobirashurov8@gmail.com" className="hover:text-primary-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    jobirashurov8@gmail.com
                  </a>
                  <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
                  <a href="tel:+998978300124" className="hover:text-primary-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +998(97)8300124
                  </a>
                  <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Uzbekistan, Bukhara
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex gap-3">
                    <a
                      href="/Jobir-Ashurov-Resume.pdf"
                      target="_blank"
                      className="group inline-flex gap-2 items-center px-6 py-3 rounded-full text-white bg-primary-500 hover:bg-primary-600 transition text-sm font-medium"
                    >
                      <svg className="w-4 h-4  transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Resume
                    </a>
                    <a
                      href="/Jobir-Ashurov-Resume.pdf"
                      download
                      className="group inline-flex gap-2 items-center px-6 py-3 rounded-full text-primary-500 border border-primary-500 hover:border-primary-600 transition text-sm font-medium"
                    >
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>

                  <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-gray-800 pt-4 sm:pt-0 sm:pl-4">
                    <Link
                      href="https://linkedin.com/in/jobir-ashurov"
                      target="_blank"
                      className="p-2 text-gray-500 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </Link>
                    <Link
                      href="https://github.com/Jobir03"
                      target="_blank"
                      className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:block z-0 -top-20 -translate-y-20 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
          <svg
            width="1300"
            height="1001"
            viewBox="0 0 1300 1001"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4" filter="url(#filter0_f_9279_7148)">
              <circle cx="800" cy="500.03" r="300" fill="hsl(227 100% 63%)" />
            </g>
            <g opacity="0.2" filter="url(#filter1_f_9279_7148)">
              <circle cx="500" cy="500.03" r="300" fill="hsl(227 100% 70%)" />
            </g>
            <defs>
              <filter
                id="filter0_f_9279_7148"
                x="300"
                y="0.029541"
                width="1000"
                height="1000"
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
                  result="effect1_foregroundBlur_9279_7148"
                />
              </filter>
              <filter
                id="filter1_f_9279_7148"
                x="0"
                y="0.029541"
                width="1000"
                height="1000"
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
                  result="effect1_foregroundBlur_9279_7148"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-10 bg-linear-to-t from-primary-500/5 via-transparent to-transparent dark:from-primary-500/10"></div>
    </section>
  );
}
