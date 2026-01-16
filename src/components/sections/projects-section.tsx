"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SectionGradient } from "@/components/ui/section-gradient";

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'Developed an embeddable AI Chat Assistant script for business owners, featuring intelligent product recommendations and Voice Chat integration.',
    tags: ['React', 'NestJS', 'OpenAI API', 'Voice Integration'],
    image: '/images/products/chat-assistant.png',
    link: 'https://demo.findecor.io/thyIvTbO2abX2cFc',
  },
  {
    title: 'Real Estate CRM',
    description: 'Engineered a Real Estate CRM with 3D building visualization and AI-driven image masking for automated building extraction.',
    tags: ['React', 'Vue.js', '3D Visualization', 'AI Masking'],
    image: '/images/products/real-estate-crm.png',
    link: 'https://frontdemo.crm-salehouse.uz/dashboard',
  },
  {
    title: 'Karvo | E-commerce',
    description: 'A scalable B2C e-commerce platform engineered for high performance, featuring a fully integrated payment gateway, real-time inventory management, and a seamless checkout experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Stripe'],
    image: '/images/products/karvo-web.png',
    link: 'https://karvo.uz/en',
  },
  {
    title: 'Karvo Mobile | E-commerce',
    description: 'A native mobile companion app providing a synchronized shopping experience across devices, optimized for touch interactions and on-the-go purchasing.',
    tags: ['Flutter', 'Dart', 'NestJS', 'Stripe'],
    image: '/images/products/karvo-mobile.png',
    link: 'https://play.google.com/store/apps/details?id=com.flutter.karvo&pli=1',
  },
  {
    title: 'ProUnity | Agency Site',
    description: 'A premium corporate digital presence platform designed to showcase portfolio works and services, featuring advanced animations and optimized lead generation funnels.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', "Python", "PostgreSQL"],
    image: '/images/products/pro-2.png',
    link: 'https://prounity.netlify.app/',
  },
  {
    title: 'Statistics CRM',
    description: "A powerful business intelligence dashboard transforming complex datasets into actionable insights through interactive charts and real-time reporting tools.",
    tags: ['React', 'TypeScript', 'Tailwind CSS', "PHP", "MySQL"],
    image: '/images/products/crm-statistics.png',
    link: 'https://frontdemo.crm-salehouse.uz/boss',
  },
  {
    title: 'Antik Decor | E-commerce',
    description: "A bespoke e-commerce storefront specialized for interior decor, combining rich visual cataloging with a streamlined purchase flow for a premium shopping experience.",
    tags: ['React', 'TypeScript', 'SCSS', "Python", "PostgreSQL", "Stripe"],
    image: '/images/products/antik-decor.png',
    link: 'https://antikdecor.ru/',
  }
];

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="py-20 dark:bg-dark-primary bg-white relative overflow-hidden">
      <SectionGradient />
      <div className="wrapper relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-dark-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div
                  className="aspect-video bg-linear-to-br from-primary-500/10 to-primary-600/10 relative overflow-hidden cursor-pointer"
                  onClick={() => project.image && setSelectedImage(project.image)}
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {
                        project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <svg
                            className="w-16 h-16 text-gray-400 dark:text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )
                      }

                      {/* Hover Overlay Icon */}
                      {project.image && (
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm leading-normal grow line-clamp-3 min-h-[60px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500 dark:bg-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline gap-1"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div
                className="relative w-full h-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Project Preview"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>,
          document.body
        )
      )}
    </section>
  );
}

