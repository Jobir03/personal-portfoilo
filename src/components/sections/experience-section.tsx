
export default function ExperienceSection() {
    const experiences = [
        {
            company: "Findecor.io",
            role: "Frontend Engineer (React & React Native)",
            period: "Sep 2025 – Present",
            location: "Tashkent, Uzbekistan",
            bullets: [
                "Architected and maintained production-scale web and mobile applications using React, React Native, and NestJS.",
                "Developed an embeddable AI Chat Assistant script for business owners, featuring intelligent product recommendations and Voice Chat integration.",
                "Integrated RESTful APIs and enhanced backend services (Node.js/NestJS) to ensure reliable data flow and error handling.",
                "Owned the feature lifecycle from requirement analysis to post-release performance improvements.",
            ],
        },
        {
            company: "SaleHouse",
            role: "Frontend Developer (ReactJs, VueJs)",
            period: "Jan 2025 – Aug 2025",
            location: "Navai, Uzbekistan",
            bullets: [
                "Engineered a Real Estate CRM, boosting system performance by 15-20% through code refactoring.",
                "Implemented 3D building visualization and AI-driven image masking for automated building extraction.",
                "Built data-driven dashboards and sales pipelines using React and Vue to automate workflows.",
            ],
        },
        {
            company: "PRO UNITY",
            role: "Frontend / Mobile developer (React, React Native)",
            period: "Oct 2023 – Jan 2025",
            location: "Bukhara, Uzbekistan",
            bullets: [
                "Developed and published commercial dashboard and mobile app templates for global digital marketplaces such as Dribbble and Envato.",
                "Built modular, reusable UI systems using React.js and React Native, focused on scalability and customization.",
                "Ensured cross-browser and cross-device compatibility with responsive design principles.",
                "Optimized UI performance and bundle size to improve loading speed and user experience.",
            ],
        },
        {
            company: "UniPoint Software Development",
            role: "Frontend developer(ReactJs)",
            period: "May 2023 – Sep 2023",
            location: "Bukhara, Uzbekistan",
            bullets: [
                "Delivered frontend features for client-facing web and mobile applications using React.js and React Native.",
                "Participated in code reviews, sprint planning, and team collaboration, gaining experience with Agile workflows.",
                "Worked closely with senior developers to improve code quality and architecture decisions.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-dark-secondary relative overflow-hidden">
            <div className="wrapper relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Professional Experience
                        </h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 ml-4 md:ml-0 pb-2"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-dark-secondary shadow-sm" />

                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                                            {exp.role}
                                        </h3>
                                        <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200">
                                            {exp.period}
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {exp.location}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-2.5 list-none ml-1 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary-400/60" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
