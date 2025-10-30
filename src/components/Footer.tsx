export default function Footer() {
  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/KhadijahFaiz' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/khadijah-faiz' },
    { icon: 'fas fa-envelope', href: 'mailto:khadijahfaiz16@gmail.com' }
    // { icon: 'fas fa-blog', href: '#', label: 'Blog (Coming Soon)' }
  ]

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; 2024 Khadijah Faiz. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-xl transition-colors transform hover:scale-110"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}