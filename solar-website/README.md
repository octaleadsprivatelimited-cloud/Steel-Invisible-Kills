# Steel Invisible Kills - Safety Nets Installation Website

A professional, responsive website for a safety nets installation company operating in Hyderabad, Telangana, India.

## 🌟 Features

- **Multi-page Website**: Home, Services, About, Contact, FAQ, Blog
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Service Pages**: Individual pages for all 12 safety nets services
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **Modern UI/UX**: Professional design with smooth animations
- **Contact Forms**: Lead generation forms with validation
- **Service Areas**: Coverage across all areas of Hyderabad

## 🚀 Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📱 Service Areas

- Banjara Hills
- Jubilee Hills
- Gachibowli
- HITEC City
- Secunderabad
- Kondapur
- Madhapur
- Begumpet
- Ameerpet
- Kukatpally
- Financial District
- Nanakramguda
- Manikonda
- Chandanagar
- Serilingampally
- Old City
- Charminar
- Dilsukhnagar
- L.B. Nagar
- Uppal
- Nagole

## 🏗️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd steel-invisible-kills-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── SafeImage.tsx   # Image component with fallbacks
│   └── ImageTest.tsx   # Image testing component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Services.tsx    # Services page
│   ├── ServicePage.tsx # Individual service pages
│   ├── About.tsx       # About company
│   ├── Contact.tsx     # Contact page
│   ├── FAQ.tsx         # FAQ page
│   ├── Blog.tsx        # Blog page
│   └── Article.tsx     # Individual blog articles
├── data/               # Data files
│   ├── services.ts     # Services data
│   └── articles.ts     # Blog articles data
├── utils/              # Utility functions
│   ├── whatsapp.ts     # WhatsApp integration
│   ├── imageUtils.ts   # Image utilities
│   ├── imageLoader.ts  # Image loading
│   └── imageFallback.ts # Image fallbacks
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Orange (#f97316)
- Secondary: Blue (#1e40af)
- Accent: Green (#059669)

### Content
Update the following files to customize content:
- Company information: `src/components/Footer.tsx`
- Contact details: `src/pages/Contact.tsx`
- Service areas: Update city arrays in multiple components
- Phone number: Search and replace `+918074616049` throughout

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social media
- Twitter Card support
- Schema.org structured data
- Location-based meta tags
- Business information markup

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder contents to your web server
3. Configure server for SPA routing

## 📞 Contact Information

- **Phone**: +91 8074616049
- **Email**: philipraju1999@gmail.com
- **Service Areas**: All areas of Hyderabad, Telangana

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
REACT_APP_COMPANY_NAME=Steel Invisible Kills
REACT_APP_PHONE_NUMBER=+918074616049
REACT_APP_EMAIL=philipraju1999@gmail.com
```

### Tailwind Configuration
Customize colors, fonts, and animations in `tailwind.config.js`

## 📈 Performance Optimization

- Lazy loading for images
- Optimized bundle size
- CSS purging with Tailwind
- Responsive images
- Minified production build

## 🔒 Security

- HTTPS enforcement
- XSS protection
- CSRF protection
- Secure form handling
- Input validation

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Phone: +91 8074616049
- WhatsApp: +91 8074616049

---

**Steel Invisible Kills** - Protecting lives with safety nets! 🛡️