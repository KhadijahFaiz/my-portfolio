export default function QATesting() {
  const projects = [
    {
      icon: 'fas fa-robot',
      title: 'Test Automation Framework',
      description: 'Comprehensive automation suite for web and API testing',
      technologies: ['Selenium', 'Pytest', 'Jenkins'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-chart-bar', label: 'Reports', href: '#' }
      ]
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Performance Testing Suite',
      description: 'Load and stress testing framework for high-traffic applications',
      technologies: ['JMeter', 'Gatling', 'Grafana'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-chart-line', label: 'Metrics', href: '#' }
      ]
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security Testing Tools',
      description: 'Automated security vulnerability assessment and penetration testing',
      technologies: ['OWASP ZAP', 'Burp Suite', 'Python'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-file-alt', label: 'Reports', href: '#' }
      ]
    }
  ]

  return (
    <section id="qa" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            QA & Testing
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 h-48 flex items-center justify-center text-white text-5xl">
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
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
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