export default function EducationSection() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-dark-primary">
            <div className="wrapper">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Education & Certificates
                        </h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Education Degree */}
                        <div className="bg-gray-50 dark:bg-dark-secondary rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                Bachelor’s Degree
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                                Navai State University
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Sep 2020 – Jul 2025 | Navai, Uzbekistan
                            </p>
                        </div>

                        {/* Certificate */}
                        <div className="bg-gray-50 dark:bg-dark-secondary rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                Front End Development Libraries
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                                freeCodeCamp
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                                Completed the freeCodeCamp Front End Development Libraries certification, gaining practical experience with Bootstrap, jQuery, Sass, React, and Redux.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
