# Accredian Enterprise Landing Page

A premium, responsive landing page for Accredian's enterprise solutions.

## Features
- **Responsive Navbar**: Clean navigation that collapses into a hamburger menu on mobile.
- **Hero Section**: Engaging CTA to open the Enquiry Modal.
- **Enquiry Modal**: A full-featured modal with professional styling, multi-step field validation, and real-time feedback.
- **Full-Stack Feedback**: Client-side validation with **Zod** and server-side persistence in a local JSON file.

## Setup Instructions

1. **Clone the repository** (if applicable).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **View the application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

### **Production Setup (Vercel KV)**
To ensure your enquiries are stored persistently in production:
1. Go to your **Vercel Project Dashboard**.
2. Navigate to the **Storage** tab.
3. Click **Create Database** and select **KV**.
4. Link the KV database to your project.
5. Redeploy your application.

## Approach Taken

1. **Design First**: Focused on creating a premium look using vanilla CSS/Tailwind-like utility classes to match the Accredian brand identity.
2. **Component Architecture**: Used Next.js App Router for a modular structure. Split the landing page into reusable components (Hero, Stats, Testimonials, etc.).
3. **Global State Integration**: Implemented a centered modal pattern triggered by multiple CTA buttons (Hero, Footer, Support) using React state lifting.
4. **Robust Validation**: 
   - **Client-side**: Used `react-hook-form` with a `zod` resolver for immediate feedback and type safety.
   - **Server-side**: Implemented a Next.js API route that validates incoming JSON using the same Zod schema before persisting.
5. **Local Persistence**: Designed a simple JSON-based storage layer in the `data/` directory. For production (Vercel), a graceful fallback is implemented to log enquiries to the cloud console, preventing 500 errors caused by the read-only serverless filesystem.

## AI Usage Explanation

- **What I built using AI**:
  - The initial scaffolding of a few sections (Stats, FAQ) to save time on repetitive HTML structure.
  - The Zod schema structure and basic API route template.
  - Assistance with specific Tailwind class combinations for the glassmorphism effects.
- **What I did by myself**:
  - Entire layout assembly and responsive design adjustments.
  - Refactoring the form from a static section into a controlled modal.
  - Implementing the complex scroll-to-trigger vs modal-open-trigger logic across the page.
  - Final visual polishing and ensuring the UI feels "premium" rather than generic.

## Improvements with More Time

1. **Email Notifications**: Integrate a service like Resend or SendGrid to notify staff when a new enquiry is submitted.
2. **Admin Dashboard**: Build a protected `/admin` route to view and manage stored enquiries directly in the browser.
3. **Framer Motion**: Add more advanced entrance animations and hover transitions for a more "living" feel.
4. **Database Integration**: Switch from `enquiries.json` to a proper database like PostgreSQL (via Prisma) or MongoDB for production scalability.
5. **A/B Testing**: Implement tracking to see which "Enquire Now" button gets more clicks.
