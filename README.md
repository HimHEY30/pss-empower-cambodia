# PSS Empower Cambodia - Full Stack Application

A dynamic, multilingual web application for PSS Empower Cambodia, featuring a React frontend with TypeScript and a Node.js/Express backend with MySQL database, all containerized with Docker.

## 🚀 Features

- **Multilingual Support**: English and Khmer language support with dynamic content management
- **Dynamic Content**: All pages, menus, and content are editable via admin API
- **JWT Authentication**: Secure authentication with role-based access control
- **RESTful API**: Clean, well-documented API endpoints
- **Docker Integration**: Full containerization for easy deployment
- **Modern Frontend**: React 18 with TypeScript, Tailwind CSS, and shadcn/ui
- **Production Ready**: Error handling, logging, validation, and security

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **State Management**: React Query for server state, Context API for language
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router v6
- **API Integration**: Custom hooks with React Query

### Backend (Node.js + Express)
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MySQL 8.0 with utf8mb4 charset
- **Authentication**: JWT with bcryptjs
- **Validation**: express-validator
- **Security**: Helmet, CORS, rate limiting
- **Logging**: Winston

### Database (MySQL)
- **Engine**: InnoDB
- **Charset**: utf8mb4 (Khmer language support)
- **Tables**: languages, users, pages, sections, menus, media with proper relationships

## 📁 Project Structure

```
pss-empower-cambodia/
├── backend/                          # Node.js/Express API
│   ├── src/
│   │   ├── controllers/             # Route handlers
│   │   ├── models/                  # Database models
│   │   ├── routes/                  # API routes
│   │   ├── services/                # Business logic
│   │   ├── middleware/              # Custom middleware
│   │   ├── config/                  # Database & config
│   │   ├── utils/                   # Utilities
│   │   └── app.js                   # Express app
│   ├── schema.sql                   # Database schema
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── src/                             # React frontend
│   ├── components/                  # Reusable components
│   ├── pages/                       # Page components
│   ├── hooks/                       # Custom React hooks
│   ├── services/                    # API service
│   ├── stores/                      # State management (legacy)
│   └── ...
├── public/                          # Static assets
├── Dockerfile                       # Frontend Dockerfile
├── nginx.conf                       # Nginx config for frontend
├── docker-compose.yml               # Full stack orchestration
├── .env.example                     # Frontend environment
└── package.json
```

## 🛠️ Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)
- MySQL 8.0 (for local development)

### 1. Clone and Setup
```bash
git clone <repository-url>
cd pss-empower-cambodia
```

### 2. Environment Configuration
```bash
# Copy environment files
cp .env.example .env.local  # Frontend environment
cp backend/.env.example backend/.env  # Backend environment
# Edit .env files with your configuration if needed
```

### 3. Start with Docker (Recommended)
```bash
docker-compose up -d
```

This will start:
- MySQL database on port 3306
- Node.js backend on port 5000
- React frontend on port 3000
- Adminer (database GUI) on port 8080
- Adminer (database GUI) on port 8080

### 4. Start Frontend
```bash
# In a new terminal
npm install
npm run dev
```

Visit `http://localhost:5173` for the frontend.

## 🔧 Development

### Backend Development
```bash
cd backend
npm install
npm run dev  # With nodemon
```

### Frontend Development
```bash
npm install
npm run dev
```

### Database Management
- **Adminer**: http://localhost:8080
- **Direct MySQL**: `mysql -h localhost -P 3306 -u pss_user -p pss_password pss_empower_cambodia`

## 📚 API Documentation

### Authentication
```http
POST /api/auth/login
POST /api/auth/register  # Admin only
GET  /api/auth/me
```

### Pages
```http
GET  /api/pages/:slug?lang=en
GET  /api/pages          # Admin
POST /api/pages          # Admin/Editor
PUT  /api/pages/:id      # Admin/Editor
DEL  /api/pages/:id      # Admin
```

### Menus
```http
GET  /api/menus/:name?lang=en
GET  /api/menus          # Admin
POST /api/menus          # Admin/Editor
PUT  /api/menus/:id      # Admin/Editor
DEL  /api/menus/:id      # Admin
```

### Media & Users
```http
GET  /api/media
POST /api/media          # Admin/Editor
PUT  /api/media/:id      # Admin/Editor
DEL  /api/media/:id      # Admin

GET  /api/users          # Admin
POST /api/users          # Admin/Editor
PUT  /api/users/:id      # Admin/Editor
DEL  /api/users/:id      # Admin
```

## 🔐 Default Admin Account

- **Username**: admin
- **Password**: admin123
- **Role**: admin

⚠️ **Change the default password in production!**

## 🌐 Multilingual Content

The application supports dynamic multilingual content:

1. **Language Switching**: Toggle between English and Khmer
2. **Dynamic Menus**: Menu items are fetched from API
3. **Page Content**: All page content is loaded dynamically
4. **Fallback Content**: Static content serves as fallback when API is unavailable

## 🚀 Deployment

### Production Build
```bash
# Frontend
npm run build

# Backend
cd backend
npm run build  # If using build step
```

### Docker Production
```bash
cd backend
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables for Production
```env
NODE_ENV=production
DB_HOST=your-db-host
DB_PASSWORD=your-secure-password
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=https://yourdomain.com
```

## 🧪 Testing

```bash
# Frontend tests
npm test

# Backend tests (if implemented)
cd backend
npm test
```

## 📊 Database Schema

Key tables:
- `languages` - Language definitions
- `users` - User accounts with roles
- `pages` - Page definitions
- `page_translations` - Multilingual page content
- `sections` - Content sections within pages
- `section_translations` - Multilingual section content
- `menus` - Menu definitions
- `menu_items` - Menu items with hierarchy
- `menu_item_translations` - Multilingual menu labels
- `media` - Media files and images

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation and sanitization
- SQL injection prevention
- Role-based access control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Built for PSS Empower Cambodia
- Continuing the legacy of Passerelles Numériques Cambodia
- Supporting Cambodian youth in IT education

---

**Made with ❤️ for Cambodian youth**
