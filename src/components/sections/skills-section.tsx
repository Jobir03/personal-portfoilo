import { SectionGradient } from "@/components/ui/section-gradient";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Other",
    skills: ["REST APIs", "WebSocket", "Socket.io", "LLM API integration", "Canvas API", "STT/STT"],
  },
  {
    title: "Languages",
    skills: ["Uzbek (Native)", "English (Professional)", "Russian (Elementary)"],
  },
];



export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 dark:bg-dark-secondary bg-gray-50 relative overflow-hidden">
      <SectionGradient />
      <div className="wrapper relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolset for building scalable, high-performance applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-dark-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-3 tracking-tight">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
