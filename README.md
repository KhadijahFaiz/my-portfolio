# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing expertise in Software Engineering, QA & Testing, AI & Data Science, and Teaching.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Tech Stack** - Next.js 16, TypeScript, Tailwind CSS
- **Smooth Animations** - Custom CSS animations and transitions
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Performance Optimized** - Static generation and optimized images

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Deployment:** Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── AIDataScience.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── QATesting.tsx
│       ├── SoftwareEngineering.tsx
│       └── Teaching.tsx
├── public/
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Layout metadata** (`src/app/layout.tsx`):
   ```typescript
   export const metadata: Metadata = {
     title: "Your Name - Portfolio",
     description: "Your description here",
   };
   ```

2. **Hero section** (`src/components/Hero.tsx`):
   - Update name and subtitle
   - Modify the typing animation text

3. **Contact information** (`src/components/Contact.tsx`):
   - Update email, LinkedIn, GitHub links
   - Modify contact methods

### Content Updates
- **Projects:** Update project details in each component
- **Skills:** Modify skill categories in `About.tsx`
- **Teaching:** Update courses and testimonials in `Teaching.tsx`
- **Links:** Replace all placeholder links with actual URLs

### Styling
- **Colors:** Modify Tailwind classes throughout components
- **Animations:** Customize animations in `globals.css`
- **Layout:** Adjust spacing and sizing as needed

## 📱 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Personal story and skill categories
3. **Software Engineering** - Development projects and technologies
4. **QA & Testing** - Testing frameworks and methodologies
5. **AI & Data Science** - Machine learning and data projects
6. **Teaching** - Educational content and testimonials
7. **Contact** - Contact form and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project generates static files and can be deployed to any static hosting service.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).