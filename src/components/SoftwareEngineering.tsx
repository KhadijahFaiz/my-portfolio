export default function SoftwareEngineering() {
  const projects = [
    {
      icon: 'fas fa-globe',
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-external-link-alt', label: 'Live', href: '#' }
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app for productivity and task management',
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-external-link-alt', label: 'Demo', href: '#' }
      ]
    },
    {
      icon: 'fas fa-server',
      title: 'Microservices Architecture',
      description: 'Scalable backend system with containerized microservices',
      technologies: ['Docker', 'Kubernetes', 'Python'],
      links: [
        { icon: 'fab fa-github', label: 'Code', href: '#' },
        { icon: 'fas fa-file-alt', label: 'Docs', href: '#' }
      ]
    }
  ]

  return (
    <section id="software" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Software Engineering
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-48 flex items-center justify-center text-white text-5xl">
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
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
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