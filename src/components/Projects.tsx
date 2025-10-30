'use client'

import { useState } from 'react'

interface Project {
  icon: string
  image?: string
  title: string
  description: string
  technologies: string[]
  links: { icon: string; label: string; href: string }[]
  customColor?: string
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('software')

  const projectCategories: {
    [key: string]: {
      title: string
      projects: Project[]
    }
  } = {
    software: {
      title: 'Software Engineering',
      projects: [
        {
          icon: 'fas fa-code',
          image: '/formsubmission.png',
          title: 'Next.js Rails Form Integration',
          description: 'Full-stack application integrating Next.js frontend with Rails backend for seamless form handling and data processing',
          technologies: ['Next.js', 'Ruby on Rails', 'TypeScript'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/nextjs-rails-form' },

          ]
        },
        {
          icon: 'fas fa-plane',
          image: '/travelco.png',
          title: 'TravelCo - Travel Destination Site',
          description: 'Modern travel booking website with responsive design and interactive user interface for seamless travel planning experience',
          technologies: ['JavaScript', 'Next.js', 'Tailwind CSS'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/travelco' },
            { icon: 'fas fa-external-link-alt', label: 'Live', href: 'https://travelco-indol.vercel.app/' }
          ]
        },
        {
          icon: 'fas fa-map-marked-alt',
          image: '/indotravi.png',
          title: 'Indo-Travi - Indonesian Travel Guide',
          description: 'Comprehensive Indonesian travel platform showcasing beautiful destinations, cultural experiences, and travel planning tools with modern responsive design',
          technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/indo-travi' },
            { icon: 'fas fa-external-link-alt', label: 'Live', href: 'https://adorable-fenglisu-82da5e.netlify.app/' }
          ]
        },
        {
          icon: 'fab fa-wordpress',
          title: 'Pet Store - WordPress E-commerce',
          description: 'Custom WordPress e-commerce website for pet supplies with product catalog, shopping cart functionality, and responsive design for optimal user experience',
          technologies: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
          customColor: 'from-gray-400 to-gray-500',
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/pet-store' }
          ]
        }
      ]
    },
    qa: {
      title: 'QA & Testing',
      projects: [

        {
          icon: 'fas fa-vial',
          image: '/poemgenie-qa.png',
          title: 'AI Poem Generator - QA Testing',
          description: 'Comprehensive quality assurance testing suite for AI poem generation application, including end-to-end testing with Cypress, performance testing with Locust, security testing with OWASP ZAP, functional testing, API validation, and AI model output verification',
          technologies: ['Python', 'Pytest', 'Cypress', 'Locust', 'OWASP ZAP', 'Security Testing', 'Performance Testing', 'E2E Testing'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/aipoemgenerator/tree/master/qa' }
          ]
        },
        {
          icon: 'fas fa-code',
          title: 'JSONPlaceholder API Testing',
          description: 'Automated API testing suite for JSONPlaceholder REST API endpoints, demonstrating comprehensive API validation, response verification, and test automation best practices',
          technologies: ['Python', 'Requests', 'Pytest', 'API Testing', 'REST API', 'Test Automation', 'Manual testing'],
          customColor: 'from-gray-400 to-gray-500',
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/jsonplaceholder-qa-tests' }
          ]
        },
        {
          icon: 'fas fa-desktop',
          title: 'Selenium Web Automation Demo',
          description: 'Selenium WebDriver automation framework demonstrating web UI testing, cross-browser compatibility testing, and automated regression testing capabilities',
          technologies: ['Python', 'Selenium WebDriver', 'Pytest', 'Web Automation', 'Cross-browser Testing'],
          customColor: 'from-gray-400 to-gray-500',
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/selenium_demo' }
          ]
        }
      ]
    },
    ai: {
      title: 'AI & Data Science',
      projects: [
        {
          icon: 'fas fa-chart-bar',
          image: '/starbucks-sales.png',
          title: 'Starbucks Sales Dashboard',
          description: 'A comprehensive full-stack web application for Starbucks sales management and business analytics. This project provides a complete solution for managing sales transactions, product inventory, customer relationships, and generating detailed business insights.',
          technologies: ['Vue js', 'Node js', 'MongoDB', 'Express js'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/starbucks-sales-dashboard' }
          ]
        },
        {
          icon: 'fas fa-feather-alt',
          image: '/poemgenie.png',
          title: 'PoemGenie - AI Poem Generator',
          description: 'Intelligent poetry generation application using natural language processing and machine learning algorithms to create original poems based on user prompts and themes',
          technologies: ['Python', 'Natural Language Processing', 'Fine-tuned GPT2', 'Machine Learning', 'Flask', 'HTML/CSS', 'Vue.js'],
          links: [
            { icon: 'fab fa-github', label: 'Code', href: 'https://github.com/KhadijahFaiz/aipoemgenerator' }
          ]
        }
      ]
    }
  }

  const tabs = [
    { id: 'software', label: 'Software Engineering' },
    { id: 'qa', label: 'QA & Testing' },
    { id: 'ai', label: 'AI & Data Science' }
  ]

  const getProjectColor = (tabId: string) => {
    switch (tabId) {
      case 'software': return 'from-blue-600 to-blue-700'
      case 'qa': return 'from-green-600 to-green-700'
      case 'ai': return 'from-purple-600 to-purple-700'
      default: return 'from-gray-600 to-gray-700'
    }
  }

  const getLinkColor = (tabId: string) => {
    switch (tabId) {
      case 'software': return 'text-blue-600 hover:text-blue-700'
      case 'qa': return 'text-green-600 hover:text-green-700'
      case 'ai': return 'text-purple-600 hover:text-purple-700'
      default: return 'text-gray-600 hover:text-gray-700'
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${activeTab === tab.id
                ? 'text-gray-900 border-gray-900'
                : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories[activeTab as keyof typeof projectCategories].projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${project.customColor || getProjectColor(activeTab)} h-48 flex items-center justify-center text-white text-5xl`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <i className={project.icon}></i>
                )}
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
                      className={`flex items-center gap-2 font-medium transition-colors ${getLinkColor(activeTab)}`}
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