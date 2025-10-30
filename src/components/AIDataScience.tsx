export default function AIDataScience() {
  const projects = [
    {
      icon: 'fas fa-brain',
      title: 'Predictive Analytics Model',
      description: 'Machine learning model for customer behavior prediction',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-chart-bar', label: 'Analysis', href: '#' }
      ]
    },
    {
      icon: 'fas fa-eye',
      title: 'Computer Vision App',
      description: 'Real-time object detection and classification system',
      technologies: ['TensorFlow', 'OpenCV', 'Flask'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-play', label: 'Demo', href: '#' }
      ]
    },
    {
      icon: 'fas fa-comments',
      title: 'NLP Sentiment Analyzer',
      description: 'Natural language processing tool for social media sentiment analysis',
      technologies: ['NLTK', 'Transformers', 'Streamlit'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-external-link-alt', label: 'App', href: '#' }
      ]
    }
  ]

  return (
    <section id="ai" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI & Data Science
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-48 flex items-center justify-center text-white text-5xl">
                <i className={project.icon}></i>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      <i className={link.icon}></i>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}