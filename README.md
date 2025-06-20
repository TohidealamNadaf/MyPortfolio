# Tohidealam Nadaf - Portfolio Website

A modern, responsive portfolio website showcasing my work as an AIML Engineer, Full Stack Developer, and Data Analyst.

## 🌟 Features

- **Modern Design**: Clean, professional layout with light green theme
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - Typewriter animation for role descriptions
  - Smooth scrolling navigation
  - Hover effects and animations
  - Interactive timeline for education/experience
- **Contact Integration**: 
  - Contact form with Formspree integration
  - Interactive chatbot for quick messaging
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.netlify.app)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: CSS Custom Properties, Flexbox, Grid
- **Icons**: Font Awesome 6.5.0
- **Fonts**: Google Fonts (Poppins, Roboto Slab)
- **Form Handling**: Formspree
- **Deployment**: Netlify
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── thank-you.html          # Thank you page for form submissions
├── style/
│   └── main.css            # Main stylesheet
├── js/
│   └── app.js              # JavaScript functionality
├── assets/
│   └── resume/
│       └── Tohidealam_Nadaf_Resume.pdf
├── favicon.ico             # Website favicon
├── _redirects              # Netlify redirects configuration
├── netlify.toml            # Netlify deployment configuration
└── README.md               # Project documentation
```

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TohidealamNadaf/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   ```bash
   # For local development
   python -m http.server 5000
   # Or simply open index.html in your browser
   ```

3. **Customize content**
   - Update personal information in `index.html`
   - Replace resume file in `assets/resume/`
   - Modify contact form endpoint in Formspree integration
   - Adjust styling in `style/main.css`

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Site will be available at `https://username.github.io/repository-name`

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
3. Deploy automatically on every push

### Manual Deployment
Upload all files to any web hosting service that supports static sites.

## 🎨 Customization

### Colors (CSS Custom Properties)
```css
:root {
  --green-light: #d1fae5;     /* Light green background */
  --green-dark: #065f46;      /* Dark green text */
  --green-accent: #10b981;    /* Accent green */
  --nav-bg-light: #ecfdf5;    /* Light navigation */
  --nav-bg-dark: #1f2937;     /* Dark navigation */
}
```

### Sections
- **Home**: Hero section with typewriter animation
- **About**: Personal introduction with profile image placeholder
- **Skills**: Technical skills grid with hover effects
- **Education & Experience**: Interactive tabs with timeline
- **Projects**: Featured projects with descriptions and tech stacks
- **Contact**: Contact form and chatbot integration

## 📱 Responsive Design

- **Desktop**: Full layout with side-by-side content
- **Tablet**: Optimized grid layouts and spacing
- **Mobile**: Stacked layouts with hamburger navigation

## 🔧 Key Features Implementation

### Dark Mode Toggle
```javascript
// Persistent theme switching with localStorage
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});
```

### Typewriter Animation
```javascript
// Dynamic role text animation
const roles = [
  'an AIML Engineer',
  'a Full Stack Developer', 
  'a Data Analyst',
  'a Problem Solver'
];
```

### Contact Form Integration
- Formspree endpoint: `https://formspree.io/f/xzzrdrgg`
- Form validation and loading states
- Thank you page redirect

## 🔒 Security & Performance

- **CSP Headers**: Content Security Policy implemented
- **Optimized Loading**: Efficient CSS and JS loading
- **Image Optimization**: Placeholder system for future images
- **Form Security**: Formspree spam protection

## 📞 Contact Information

- **Email**: tohidealamfnadaf2003@gmail.com
- **LinkedIn**: [tohidealam-nadaf](https://linkedin.com/in/tohidealam-nadaf)
- **GitHub**: [TohidealamNadaf](https://github.com/TohidealamNadaf)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] Project filtering and search
- [ ] Animation performance optimization
- [ ] PWA implementation
- [ ] Multi-language support
- [ ] Analytics integration

---

**Built with ❤️ by Tohidealam Nadaf**