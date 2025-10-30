'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // EmailJS Configuration - Replace these with your actual values from EmailJS dashboard
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'khadijahfaiz16@gmail.com'
      }

      // EmailJS credentials from your dashboard
      const SERVICE_ID = 'service_uv6jrpb'                    // ✅ Your Service ID
      const TEMPLATE_ID = 'template_07w1kht'                  // ✅ Your Template ID  
      const PUBLIC_KEY = 'Y9jdHlmdkQ7Vprbg0'                // ✅ Your Public Key

      // Send email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      alert('✅ Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      label: 'khadijahfaiz16@gmail.com',
      href: 'mailto:khadijahfaiz16@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'linkedin.com/in/khadijah-faiz',
      href: 'https://www.linkedin.com/in/khadijah-faiz'
    },
    {
      icon: 'fab fa-github',
      label: 'github.com/KhadijahFaiz',
      href: 'https://github.com/KhadijahFaiz'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                    <i className={method.icon}></i>
                  </div>
                  <span className="text-lg">{method.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                  required
                >
                  <option value="" className="text-gray-800">Select a topic</option>
                  <option value="software" className="text-gray-800">Software Engineering</option>
                  <option value="qa" className="text-gray-800">QA & Testing</option>
                  <option value="ai" className="text-gray-800">AI & Data Science</option>
                  <option value="teaching" className="text-gray-800">Teaching Opportunity</option>
                  <option value="collaboration" className="text-gray-800">Collaboration</option>
                  <option value="collaboration" className="text-gray-800">Freelance Projects</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}