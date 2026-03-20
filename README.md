# PSS Empower Cambodia

A modern, responsive web application built with React and TypeScript to showcase the mission, programs, and impact of PSS Empower Cambodia.

## Description

PSS Empower Cambodia is dedicated to empowering communities in Cambodia through education, sustainable development, and social initiatives. This website serves as a digital platform to inform visitors about our work, share news and updates, and provide ways to get involved.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-page Layout**: Includes Home, About, Programs, Impact, News, Get Involved, and Contact pages
- **Modern UI Components**: Built with ShadCN UI for a professional and accessible interface
- **Fast Performance**: Powered by Vite for rapid development and optimized builds
- **Type-Safe Development**: Written in TypeScript for better code quality and maintainability

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Testing**: Vitest with jsdom
- **Linting**: ESLint
- **Package Manager**: Bun (with npm compatibility)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pss-empower-cambodia.git
   cd pss-empower-cambodia
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── NavLink.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Contributing

We welcome contributions to improve PSS Empower Cambodia's website! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

The project uses Vitest for unit testing. Run tests with:

```bash
npm run test
```

## Deployment

The application is built for static hosting. After running `npm run build`, the `dist` folder contains the production-ready files that can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact us through the [Contact page](https://pss-empower-cambodia.com/contact) on our website.

---

Built with ❤️ for the empowerment of Cambodian communities.
