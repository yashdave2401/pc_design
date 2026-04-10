# Precision Chemistry Solutions

A modern web application for chemistry and chemical solutions management built with React, TypeScript, and Vite.

## Features

- Interactive user interface with React and TypeScript
- Modern UI components from shadcn/ui
- Data visualization with Recharts
- Form handling with React Hook Form
- State management with TanStack Query
- Responsive design with Tailwind CSS
- Dark mode support with next-themes

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router
- **Testing**: Vitest, Playwright
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or Bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build
# or
bun run build
```

### Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
  ├── components/     # React components
  ├── lib/           # Utility functions
  ├── hooks/         # Custom React hooks
  ├── index.css      # Global styles
  └── main.tsx       # Application entry point
```

## License

This project is licensed under the MIT License.