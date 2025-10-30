export default function Teaching() {
  const teachingAreas = [
    {
      icon: 'fas fa-calculator',
      title: 'Thirdspace Global Tutor',
      description: 'Mathematics tutor at Thirdspace Global, specializing in UK curriculum and helping students achieve academic excellence.',
      courses: [
        'SAT Preparation',
        'GCSE Mathematics (UK Syllabus)',
        'Primary Mathematics',
        'Key Stage 2 and 3 Mathematics',
        'Mathematical Problem Solving',
      ]
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Private Tutoring',
      description: 'Providing personalized one-on-one tutoring across multiple subjects, adapting teaching methods to individual student needs.',
      courses: [
        'Mathematics',
        'Information Technology',
        'Science (Physics, Chemistry, Biology)',
        'English Language & Literature'
      ]
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'IT Lecturing Opportunities',
      description: 'Available for lecturing positions in Information Technology, bringing industry experience and practical knowledge to academic institutions.',
      courses: [
        'Software Engineering & Development',
        'Quality Assurance & Testing',
        'AI & Machine Learning',
        'Web Development & Programming'
      ]
    }
  ]

  const testimonials = [
    {
      text: "I learnt how to divide multiply and learn money. Understood everything clearly. Everything was wonderful",
      author: "KS 3 Student, Thirdspace Global"
    },
    {
      text: "Excellent. Useful.",
      author: "Workshop Participant"
    },
    {
      text: "Excellent tutor across multiple subjects. My son's grades have improved.",
      author: "Private Tutoring Student's Parent"
    }
  ]

  return (
    <section id="teaching" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Teaching & Education
          </h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate about education across multiple disciplines. Currently teaching Mathematics (UK syllabus) at Thirdspace Global, providing private tutoring in Maths, IT, Science, and English, and available for IT lecturing opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teachingAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                <i className={area.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <ul className="space-y-3 text-left">
                {area.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            What Students Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-600"
              >
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <cite className="text-gray-600 font-semibold">
                  - {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}