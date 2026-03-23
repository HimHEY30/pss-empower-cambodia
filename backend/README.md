# PSS Empower Cambodia - Backend API

A Node.js/Express backend API for the PSS Empower Cambodia website, providing multilingual content management with MySQL database.

## Features

- **Multilingual Support**: English and Khmer language support with translation tables
- **JWT Authentication**: Secure authentication with role-based access control
- **Dynamic Content Management**: CRUD operations for pages, sections, menus, and media
- **RESTful API**: Clean, well-documented API endpoints
- **Docker Support**: Full containerization with Docker Compose
- **Production Ready**: Error handling, logging, validation, and security middleware

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MySQL 8.0 with utf8mb4 charset
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: express-validator
- **Security**: Helmet, CORS, bcryptjs
- **Logging**: Winston
- **Containerization**: Docker & Docker Compose

## Quick Start

### Using Docker (Recommended)

1. **Clone and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

3. **Start services**
   ```bash
   docker-compose up -d
   ```

4. **Database will be automatically initialized with schema**

### Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup MySQL database**
   - Create database: `pss_empower_cambodia`
   - Run the schema.sql file

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (Admin only)
- `GET /api/auth/me` - Get current user info

### Pages
- `GET /api/pages/:slug?lang=en` - Get page by slug
- `GET /api/pages` - Get all pages (Admin)
- `POST /api/pages` - Create page (Admin/Editor)
- `PUT /api/pages/:id` - Update page (Admin/Editor)
- `DELETE /api/pages/:id` - Delete page (Admin)

### Menus
- `GET /api/menus/:name?lang=en` - Get menu by name
- `GET /api/menus` - Get all menus (Admin)
- `POST /api/menus` - Create menu (Admin/Editor)
- `PUT /api/menus/:id` - Update menu (Admin/Editor)
- `DELETE /api/menus/:id` - Delete menu (Admin)

### Media
- `GET /api/media` - Get all media
- `POST /api/media` - Upload media (Admin/Editor)
- `PUT /api/media/:id` - Update media (Admin/Editor)
- `DELETE /api/media/:id` - Delete media (Admin)

### Users (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Database Schema

The database uses normalized tables with foreign key relationships:

- `languages` - Language definitions
- `users` - User accounts with roles
- `pages` - Page definitions
- `page_translations` - Multilingual page content
- `sections` - Content sections within pages
- `section_translations` - Multilingual section content
- `menus` - Menu definitions
- `menu_items` - Menu items with hierarchy support
- `menu_item_translations` - Multilingual menu labels
- `media` - Media files and images

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | development |
| `PORT` | Server port | 3000 |
| `DB_HOST` | MySQL host | localhost |
| `DB_PORT` | MySQL port | 3306 |
| `DB_NAME` | Database name | pss_empower_cambodia |
| `DB_USER` | Database user | pss_user |
| `DB_PASSWORD` | Database password | pss_password |
| `JWT_SECRET` | JWT signing secret | (required) |
| `JWT_EXPIRE` | JWT expiration time | 7d |
| `LOG_LEVEL` | Logging level | info |

## Default Admin Account

- **Username**: admin
- **Password**: admin123 (change in production!)

## Development

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Run tests
npm test

# Lint code
npm run lint
```

## Docker Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Access database
# Open http://localhost:8080 in browser (Adminer)
```

## Frontend Integration

The API is designed to work seamlessly with Vue 3 + Pinia frontend:

```javascript
// Fetch page content
const response = await fetch('/api/pages/home?lang=en');
const page = await response.json();

// Fetch menu
const menuResponse = await fetch('/api/menus/main?lang=en');
const menu = await menuResponse.json();
```

## Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation and sanitization
- SQL injection prevention
- Role-based access control

## Production Deployment

1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Configure proper database credentials
4. Enable SSL/TLS
5. Set up proper logging
6. Use process manager (PM2)
7. Configure reverse proxy (nginx)

## License

MIT License - see LICENSE file for details.