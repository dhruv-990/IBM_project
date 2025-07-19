# 🛡️ LifeSure Insurance Application

A comprehensive multi-user insurance management system with blog creation and policy management features.

## ✨ **Features**

### 🔐 **User Authentication**
- User registration and login
- JWT token-based authentication
- Secure password hashing
- User-specific data isolation

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

### 🎨 **Modern UI/UX**
- Responsive Bootstrap design
- Beautiful insurance-themed interface
- Interactive modals and forms
- Dynamic content loading
- Mobile-friendly layout

## 🏗️ **Architecture**

### **Backend (Node.js + Express)**
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Security**: bcrypt password hashing
- **API**: RESTful endpoints
- **Hosting**: Railway (recommended)

### **Frontend (HTML + CSS + JavaScript)**
- **Framework**: Bootstrap 5
- **Editor**: Quill.js for rich text
- **Icons**: Font Awesome
- **Hosting**: Netlify (recommended)

## 🚀 **Quick Start**

### **Local Development**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/lifesure-insurance.git
   cd lifesure-insurance
   ```

2. **Set up backend:**
   ```bash
   cd backend/insurance-backend
   npm install
   ```

3. **Create .env file:**
   ```env
   MONGO_URI=mongodb://localhost:27017/lifesure_insurance
   JWT_SECRET=your_secret_key_here
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open frontend:**
   - Navigate to `Frontend Website/Insurance company website/`
   - Open `index.html` in your browser

### **Deployment**

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 📁 **Project Structure**

```
IBM_project/
├── backend/insurance-backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Blog.js
│   │   └── Policy.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── blog.js
│   │   └── policy.js
│   ├── server.js
│   └── package.json
├── Frontend Website/Insurance company website/
│   ├── index.html
│   ├── login.html
│   ├── create-blog.html
│   ├── blog.html
│   ├── policies.html
│   ├── css/
│   ├── js/
│   └── img/
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🔧 **API Endpoints**

### **Authentication**
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### **Blogs**
- `POST /blog/create` - Create new blog (authenticated)
- `GET /blog/my-blogs` - Get user's blogs (authenticated)
- `DELETE /blog/:id` - Delete blog (authenticated)

### **Policies**
- `POST /policy/buy` - Buy new policy (authenticated)
- `GET /policy/my-policies` - Get user's policies (authenticated)
- `PUT /policy/:id` - Update policy (authenticated)

## 👥 **Multi-User Features**

✅ **User Isolation**: Each user sees only their own data
✅ **Secure Authentication**: JWT tokens with expiration
✅ **Role-Based Access**: Users can only modify their own content
✅ **Scalable Database**: MongoDB handles concurrent users
✅ **Cloud Ready**: Designed for deployment and scaling

## 🛡️ **Security Features**

- **Password Hashing**: bcrypt with salt
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Server-side validation
- **CORS Protection**: Cross-origin request handling
- **Error Handling**: Secure error responses

## 🎯 **Deployment URLs**

- **Frontend**: `https://your-app-name.netlify.app`
- **Backend**: `https://your-app-name.railway.app`
- **Health Check**: `https://your-app-name.railway.app/health`

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 🆘 **Support**

For deployment help, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

**Built with ❤️ for LifeSure Insurance** 