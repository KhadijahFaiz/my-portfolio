export default function Experience() {
  const experiences = [
    
    {
      title: "Website Maintenance Coordinator and Quality Assurance",
      company: "Salt and Fuessel",
      period: "May 2025 - Present",
      location: "Australia | Remote",
      description: "Supported Salt & Fuessel’s digital projects through quality assurance, design audits, and UI/UX testing. Worked closely with cross-functional teams to maintain design precision and technical stability for client websites.",
      achievements: [
         "Performed detailed UI/UX audits ensuring pixel-perfect implementation of Figma designs.",
          "Tested website functionalities, forms, and navigation flows to ensure smooth user interactions.",
          "Collaborated with developers to address SEO, layout, and responsiveness issues.",
          "Ensured consistent performance and accessibility across desktop and mobile platforms."
      ]
    },
    {
      title: "Website Maintenance Coordinator and Quality Assurance (Probationary)",
      company: "Tarn IT Solutions (Salt and Fuessel)",
      period: "June 2025 - July 2025",
      location: "Australia | Remote",
      description: "Worked as part of Tarn IT’s QA and web maintenance team handling client projects under Salt & Fuessel, an Australian-based digital agency. Focused on maintaining website quality, identifying UI/UX defects, and ensuring design consistency across devices.",
      achievements: [
      "Conducted manual and responsive testing across multiple browsers and devices to ensure consistent user experience.",
      "Logged, tracked, and verified defects using structured bug reports, collaborating closely with developers to resolve issues.",
      "Validated website content, SEO elements, and layout alignment against Figma prototypes.",
      "Performed regression testing after each deployment to ensure no breaking changes in production."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Techneapp",
      period: "January 2025 - March 2025",
      location: "UK | Colombo, Sri Lanka | Hybrid",
      description: "Worked in an Agile environment building full-stack web applications using React.js, Next.js, and Node.js. Contributed to both development and testing phases ensuring functional and UI consistency.",
      achievements: [
        "Designed and developed client sites using Figma, Next js, React js, Tailwind CSS and Material UI",
        "Built and tested front-end features aligned with Figma prototypes.",
        "Performed usability and functionality testing for responsive designs.",
        "Collaborated with team members to debug applications and ensure high-quality product releases."
      ]
    },
    {
      title: "Online Mathematics Tutor",
      company: "Thirdspace Global",
      period: "December 2023 - July 2025",
      location: "UK |  Colombo, Sri Lanka | Remote",
      description: "Delivered structured mathematics lessons to international students, improving communication and analytical reasoning skills. Gained experience in attention to detail and structured problem-solving — valuable in software testing.",
      achievements: [
        "Simplified complex concepts to enhance learning engagement.",
        "Developed strong communication and analytical skills transferable to QA work.",
        "Maintained high student satisfaction and performance improvement rates."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-600 mb-4">
                    <span className="font-medium text-gray-800">{exp.company}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-sm text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}