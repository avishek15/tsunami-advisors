# Tsunami Advisors Website

A modern, responsive React website for Tsunami Advisors - an AI and tech consulting firm. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Features

-   **Modern Design**: Clean, professional design with a sophisticated color scheme
-   **Responsive Layout**: Fully responsive design that works on all devices
-   **Smooth Animations**: Subtle animations using Framer Motion for enhanced user experience
-   **Professional Typography**: Uses Inter font for excellent readability
-   **Accessible**: Built with accessibility in mind
-   **Fast Performance**: Optimized with Vite for fast development and build times

## Tech Stack

-   **React 18** - Modern React with hooks
-   **TypeScript** - Type safety and better developer experience
-   **Vite** - Fast build tool and development server
-   **Tailwind CSS** - Utility-first CSS framework
-   **Framer Motion** - Animation library for React
-   **Lucide React** - Beautiful, customizable icons

## Getting Started

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tsunami-advisors
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind directives
└── assets/          # Static assets
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. The primary colors are:

-   Primary: Blue gradient (primary-50 to primary-900)
-   Secondary: Gray scale (secondary-50 to secondary-900)

### Animations

Custom animations are defined in the Tailwind config and can be customized in `tailwind.config.js`.

### Content

All content is defined in the `App.tsx` component. You can easily modify:

-   Services offered
-   Company information
-   Contact details
-   Hero section content

## Deployment

This project can be deployed to any static hosting service:

-   **Vercel**: Connect your GitHub repository and deploy automatically
-   **Netlify**: Drag and drop the `dist` folder or connect your repository
-   **GitHub Pages**: Use the GitHub Actions workflow
-   **AWS S3**: Upload the `dist` folder to an S3 bucket

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions about this website or Tsunami Advisors services, please contact:

-   Email: info@tsunamiadvisors.com
-   Phone: +1 (555) 123-4567
