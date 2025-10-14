# Modern Portfolio Website

A stunning, fully responsive portfolio website built with Next.js 15 and Tailwind CSS featuring modern UI/UX design, smooth animations, and component-based architecture.

## 🚀 Features

- ✨ Modern and elegant design with gradient effects
- 📱 Fully responsive across all devices
- 🎨 Beautiful animations and hover effects
- ⚡ Fast performance with Next.js 14
- 🎯 Component-based architecture
- 🔄 Smooth scroll navigation
- 💼 Project showcase with dynamic effects
- 📊 Tech stack visualization with progress bars
- 📬 Contact form with social media links
- ⬆️ Scroll-to-top button

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page importing all components
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.jsx          # Sticky navigation with scroll effect
│   ├── Hero.jsx            # Hero section with typewriter effect
│   ├── About.jsx           # About section with expandable content
│   ├── Experience.jsx      # Timeline-based experience section
│   ├── Projects.jsx        # Project showcase grid
│   ├── TechStack.jsx       # Skills with progress bars
│   ├── Contact.jsx         # Contact form and information
│   ├── Footer.jsx          # Footer with links and social media
│   └── ScrollToTop.jsx     # Scroll to top button
├── public/                 # Static assets (images, etc.)
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🛠️ Installation

1. **Create a new Next.js project:**
```bash
npx create-next-app@latest portfolio-website
```

2. **Navigate to the project directory:**
```bash
cd portfolio-website
```

3. **Install dependencies:**
```bash
npm install lucide-react
```

4. **Create the components folder:**
```bash
mkdir components
```

5. **Copy all component files** into the `components/` folder:
   - Navbar.jsx
   - Hero.jsx
   - About.jsx
   - Experience.jsx
   - Projects.jsx
   - TechStack.jsx
   - Contact.jsx
   - Footer.jsx
   - ScrollToTop.jsx

6. **Replace the following files in the `app/` folder:**
   - `page.jsx` (main page)
   - `layout.jsx` (root layout)
   - `globals.css` (global styles)

7. **Configure Tailwind CSS** (if not already configured):

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section (Hero.jsx):**
   - Change name: Line with `<h1>John Doe</h1>`
   - Update profile image URL
   - Modify roles in the `roles` array

2. **About Section (About.jsx):**
   - Edit description text in `shortDescription` and `fullDescription`
   - Update statistics (Years Experience, Projects Done)
   - Modify skills in the quick view

3. **Experience Section (Experience.jsx):**
   - Update the `experiences` array with your actual work history
   - Modify role, company, period, description, and technologies

4. **Projects Section (Projects.jsx):**
   - Replace `projects` array data with your actual projects
   - Update images, titles, descriptions, and technologies
   - Add GitHub and live demo links

5. **Tech Stack Section (TechStack.jsx):**
   - Modify `categories` array with your actual skills
   - Adjust skill levels (percentage)
   - Add or remove technologies

6. **Contact Section (Contact.jsx):**
   - Update email, phone, and location in `contactInfo`
   - Add your social media links in `socialLinks`
   - Implement actual form submission logic

7. **Footer (Footer.jsx):**
   - Update social media links
   - Modify footer links as needed

### Color Scheme

The portfolio uses a cyan-blue gradient theme. To change colors:
- Primary: `from-cyan-400 to-blue-500`
- Secondary: `from-blue-500 to-purple-500`
- Accent: `from-purple-500 to-pink-500`

Replace these gradient classes throughout the components with your preferred colors.

## 🚀 Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📸 Replacing Demo Images

The portfolio currently uses demo images from Unsplash. Replace them with your own:

1. **Profile Image (Hero.jsx):**
   - Replace the URL in the `<img>` tag with your profile photo
   - Recommended size: 500x500px

2. **About Section Image (About.jsx):**
   - Replace workspace/desk image
   - Recommended size: 600x600px

3. **Project Images (Projects.jsx):**
   - Replace each project thumbnail
   - Recommended size: 600x400px

### Using Local Images:

Place images in the `public/` folder:
```
public/
  images/
    profile.jpg
    about.jpg
    project1.jpg
    project2.jpg
    project3.jpg
```

Then update the image paths:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

## 🎯 Section IDs for Navigation

Each section has an ID for smooth scroll navigation:
- `#home` - Hero section
- `#about` - About section
- `#experience` - Experience section
- `#projects` - Projects section
- `#tech-stacks` - Tech Stack section
- `#contact` - Contact section

## 📱 Responsive Breakpoints

The portfolio uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ⚡ Performance Tips

1. **Optimize Images:**
   - Use Next.js Image component for automatic optimization
   - Compress images before uploading

2. **Lazy Loading:**
   - Images are automatically lazy-loaded by Next.js

3. **Code Splitting:**
   - Next.js automatically splits code by route

## 🔧 Common Issues & Solutions

### Issue: Components not rendering
**Solution:** Ensure all components have `"use client"` directive at the top since they use React hooks.

### Issue: Tailwind styles not applying
**Solution:** 
- Check that `globals.css` is imported in `layout.jsx`
- Verify `tailwind.config.js` content paths are correct
- Restart the dev server

### Issue: Scroll navigation not working
**Solution:** Ensure section IDs match the navigation link targets (lowercase, hyphenated).

### Issue: Icons not showing
**Solution:** Verify `lucide-react` is installed:
```bash
npm install lucide-react
```

## 🌐 Deployment

### Deploy to Vercel (Recommended):

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

```bash
npm run build
```

### Deploy to Netlify:

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder

### Environment Variables:

If you add form submission or API integrations, create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

## 📝 Adding Form Submission

To make the contact form functional, you can use:

1. **EmailJS:**
```bash
npm install @emailjs/browser
```

2. **Formspree:**
Update the form action in Contact.jsx

3. **Custom API:**
Create an API route in `app/api/contact/route.js`

Example using fetch:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }
};
```

## 🎨 Additional Customization Ideas

1. **Add Dark/Light Mode Toggle:**
   - Implement theme switching with context
   - Use Tailwind's dark mode feature

2. **Add Blog Section:**
   - Create a new Blog component
   - Integrate with CMS like Contentful or Sanity

3. **Add Testimonials:**
   - Create a Testimonials component
   - Add client reviews carousel

4. **Add Certifications:**
   - Create a Certifications component
   - Display badges and credentials

5. **Add Resume Download:**
   - Place PDF in `public/` folder
   - Link to `/resume.pdf`

## 📦 Additional Packages (Optional)

For enhanced functionality:

```bash
# Animations
npm install framer-motion

# Form validation
npm install react-hook-form

# Icons (more options)
npm install react-icons

# Carousel for testimonials
npm install react-slick slick-carousel
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

1. **Keep it Updated:** Regularly update your projects and experience
2. **Add Analytics:** Integrate Google Analytics or Vercel Analytics
3. **SEO Optimization:** Update meta tags in `layout.jsx`
4. **Performance:** Monitor and optimize load times
5. **Accessibility:** Test with screen readers and keyboard navigation

## 🎉 You're All Set!

Your modern portfolio website is ready to showcase your work. Remember to:
- ✅ Update all personal information
- ✅ Replace demo images with your own
- ✅ Test on multiple devices
- ✅ Add your actual projects
- ✅ Connect your social media
- ✅ Deploy to production

**Good luck with your portfolio! 🚀**