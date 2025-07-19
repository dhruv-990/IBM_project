# 🛡️ LifeSure Insurance - Frontend

The frontend application for LifeSure Insurance, a comprehensive multi-user insurance management system.

## ✨ **Features**

### 🎨 **Modern UI/UX**
- Responsive Bootstrap 5 design
- Beautiful insurance-themed interface
- Interactive modals and forms
- Mobile-friendly layout
- Rich text editor for blogs

### 🔐 **User Authentication**
- Login and registration forms
- JWT token management
- User-specific data access
- Secure authentication flow

### 📝 **Blog Management**
- Create insurance-related blogs
- Rich text editor with Quill.js
- Blog categories and tags
- Author attribution and ownership
- Delete functionality for blog authors

### 📋 **Policy Management**
- Buy new insurance policies
- Update existing policies
- Policy number generation
- Coverage details and payment tracking
- User-specific policy access

## 🏗️ **Technology Stack**

- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
- **Bootstrap 5** - Responsive framework
- **JavaScript (ES6+)** - Interactive functionality
- **Quill.js** - Rich text editor
- **Font Awesome** - Icons
- **jQuery** - DOM manipulation

## 🚀 **Quick Start**

### **Local Development**
1. Clone this repository
2. Open `index.html` in your browser
3. The app will connect to the Railway backend

### **Deployment**
- **Netlify:** Drag and drop this folder to Netlify
- **GitHub Pages:** Push to GitHub and enable Pages
- **Any static hosting:** Upload files to your hosting provider

## 📁 **Project Structure**

```
Frontend Website/Insurance company website/
├── index.html              # Home page
├── login.html              # Authentication page
├── create-blog.html        # Blog creation page
├── blog.html               # Blog listing page
├── policies.html           # Policy management page
├── about.html              # About page
├── contact.html            # Contact page
├── css/                    # Stylesheets
│   ├── bootstrap.min.css
│   └── style.css
├── js/                     # JavaScript files
│   ├── main.js
│   └── config.js
├── img/                    # Images and assets
├── lib/                    # Third-party libraries
└── scss/                   # SCSS source files
```

## 🔗 **API Integration**

The frontend connects to the Railway backend at:
```
https://modest-enjoyment-production.up.railway.app
```

### **API Endpoints Used:**
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /blog/create` - Create blog
- `GET /blog` - Get all blogs
- `DELETE /blog/:id` - Delete blog
- `POST /policy/buy` - Buy policy
- `GET /policy/my-policies` - Get user policies
- `PUT /policy/:id` - Update policy

## 🎯 **Multi-User Features**

✅ **User Isolation**: Each user sees only their own data
✅ **Secure Authentication**: JWT tokens with expiration
✅ **Role-Based Access**: Users can only modify their own content
✅ **Responsive Design**: Works on all devices
✅ **Modern UI**: Beautiful and intuitive interface

## 🛡️ **Security Features**

- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Client-side validation
- **CORS Handling**: Proper cross-origin requests
- **Error Handling**: User-friendly error messages

## 📱 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 **Deployment**

### **Netlify (Recommended)**
1. Go to [Netlify](https://netlify.com)
2. Drag and drop this folder
3. Your site will be live instantly!

### **GitHub Pages**
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch

### **Custom Domain**
- Add custom domain in hosting provider settings
- Update DNS records as needed

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

---

**Built with ❤️ for LifeSure Insurance** 