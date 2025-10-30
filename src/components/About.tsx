export default function About() {
  const skills = [
    {
      icon: 'fas fa-code',
      title: 'Software Engineering',
      items: ['Full-stack Development', 'System Architecture', 'API Design']
    },
    {
      icon: 'fas fa-bug',
      title: 'QA & Testing',
      items: ['Test Automation', 'Performance Testing', 'Quality Processes']
    },
    {
      icon: 'fas fa-brain',
      title: 'AI & Data Science',
      items: ['Machine Learning', 'Data Analysis', 'Model Development']
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Teaching',
      items: ['Course Development', 'Technical Workshops', 'Mentoring']
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Profile Image */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="mb-6">
              <img
                src="/about-img.jpg"
                alt="Khadijah Faiz"
                className="w-48 h-auto sm:w-56 lg:w-72 object-contain mx-auto"
              />
            </div>

            {/* Quick Stats - aligned with skills boxes */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-7 h-14 bg-gray-900 rounded-sm flex items-center justify-center text-white mr-3 text-sm">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-sm font-semibold text-gray-800">Quick Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-lg font-bold text-gray-900">1+</div>
                  <div className="text-xs text-gray-600">Experience</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-600">Personal Projects</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">10+</div>
                  <div className="text-xs text-gray-600">Technologies</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">5+</div>
                  <div className="text-xs text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Text and Skills */}
          <div className="flex-1 space-y-6">
            {/* About Text */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm a versatile technology professional with expertise spanning software engineering,
                quality assurance, artificial intelligence, and data science. My passion lies in
                creating robust solutions while ensuring the highest quality standards.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Beyond development and testing, I'm deeply committed to education and knowledge sharing,
                helping others navigate the ever-evolving tech landscape through teaching and mentoring.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                When I'm not coding or testing, you'll find me exploring the latest AI developments,
                mentoring aspiring developers, or creating educational content to help others grow in their tech careers.
              </p>
            </div>

            {/* Skills Grid - Optimized Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-5 bg-gray-900 rounded-sm flex items-center justify-center text-white mr-3 text-sm">
                      <i className={skill.icon}></i>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800">{skill.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-center text-xs">
                        <span className="w-1 h-1 bg-gray-400 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}