# Accredian Enterprise Landing Page

A premium, responsive landing page for Accredian's enterprise solutions, featuring a full-stack enquiry management system.

## 🚀 Features
- **Modern UI**: Clean, professional design with smooth transitions and glassmorphism effects.
- **Controlled Modal**: A centralized "Enquire Now" modal accessible from the Hero, Footer, and Support sections.
- **Smart Form**: 
  - **Client-Side Validation**: Real-time feedback using `react-hook-form` and `Zod`.
  - **Type Safety**: Fully typed form data and API responses.
- **Hybrid Storage**:
  - **Local Development**: Saves enquiries to a local `data/enquiries.json` file.
  - **Production (Vercel)**: Uses **Vercel KV (Redis)** for persistent data storage in a serverless environment.

## 🛠️ Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Setup Vercel KV (For Production Persistence)**:
   - Connect your project to Vercel.
   - Go to the **Storage** tab in your Vercel Dashboard.
   - Create a **KV (Redis)** database and link it to this project.
   - This automatically adds the necessary environment variables (`KV_REST_API_URL`, etc.).
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **View the application**: Open [http://localhost:3000](http://localhost:3000).

## 💡 Approach & Technical Decisions

1. **State Lifting**: To allow multiple disparate buttons to trigger the same modal, I lifted the modal state to the root `Page` component. This ensures a single source of truth for the UI state.
2. **Schema-Driven Validation**: By defining a shared **Zod schema**, I ensured that the data validation rules are identical on both the client (for UX) and the server (for security).
3. **Graceful Fallback Storage**: Developed an API route that detects its environment. It tries to use KV for production persistence but falls back to a local JSON file for a seamless developer experience without needing cloud setup.
4. **Modular Architecture**: Split the landing page into isolated components (Hero, FAQ, Stats, etc.) making it easy to maintain and scale.

## 🤖 AI Usage Attribution

- **AI-Assisted (30%)**:
  - Initial scaffolding for the FAQ and Stats sections.
  - Generating the baseline Zod schema and API route boilerplate.
  - Optimization of CSS transitions for the modal zoom effects.
- **Manual Implementation (70%)**:
  - Core architecture (State lifting, Modal control logic from scratch).
  - Implementation of `react-hook-form` with custom hooks.
  - Developing the Hybrid Storage logic (KV vs. Local File detection).
  - Final visual polishing, responsive debugging, and ensuring the UI feels "premium" rather than generic.

## 📈 Future Improvements

1. **Dashboard UI**: Add an authenticated admin view to browse and filter enquiries stored in Vercel KV.
2. **Email Automation**: Connect a service like Resend to trigger instant email notifications upon submission.
3. **Data Exports**: Add a feature to download enquiries as CSV/Excel for the sales team.
