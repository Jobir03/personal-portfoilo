export default function AboutSection() {
  return (
    <section id="about" className="py-20 dark:bg-dark-primary bg-white">
      <div className="wrapper">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Full-stack MERN Developer & Mobile Engineer with 2.5+ years of experience building production-ready web and mobile
                applications using Node.js, Express, React, and Next.js.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Experienced in building scalable backends with Node.js, CRM systems, dashboards, and
                high-performance UI architectures, with a strong focus on clean code and business-oriented
                solutions.
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full text-white bg-primary-500 hover:bg-primary-600 transition text-sm font-medium"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 transition text-sm font-medium"
                >
                  View Projects
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

