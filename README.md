# Scorpy Tech — Official Website

A responsive, animation-rich React + Vite website for Scorpy Tech, designed around the supplied blue/cyan logo and the tagline **“One stop solution for IT Services & Lab Equipment.”**

## Included
- Premium responsive landing page
- Animated hero and service cards
- Services, About, Process, FAQ and Contact sections
- Mobile navigation
- Click-to-call and click-to-email actions
- Enquiry form with validation
- Express backend + Nodemailer for routing enquiries to `scorpytechs@gmail.com`
- Helmet security headers and enquiry rate limiting
- Supplied Scorpy Tech logo included in the project

## Contact information configured
- Phone: 866 851 4055
- Email: scorpytechs@gmail.com
- Address: 736 B Wing, Gera Imperium Gateway, Nashik Phata, Pune, Maharashtra

## Run locally
Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173
API: http://localhost:5000

## Configure enquiry email
1. Copy `.env.example` to `.env`.
2. Enter SMTP details.
3. For Gmail, enable 2-Step Verification and create a Google App Password. Put that App Password in `SMTP_PASS`.
4. Keep `ENQUIRY_TO=scorpytechs@gmail.com`.
5. For production, use HTTPS and a dedicated business SMTP provider/account where appropriate.

## Production build
```bash
npm install
npm run build
npm start
```

The Express server serves the Vite `dist` folder when it exists.

## Important deployment note
The enquiry form cannot securely send mail using only frontend JavaScript. The included backend handles the SMTP credentials server-side. Do not put SMTP passwords in React/Vite frontend environment variables.

## Deploy with Render Blueprint (`render.yaml`)

This repository includes a [render.yaml](file:///d:/Downloads/scorpytech-official-website/scorpytech-website/render.yaml) blueprint specification for 1-click infrastructure deployment on [Render](https://render.com).

1. Push this repository to your GitHub or GitLab account.
2. Go to the [Render Dashboard](https://dashboard.render.com).
3. Click **New +** and select **Blueprint**.
4. Connect your repository. Render will automatically detect [render.yaml](file:///d:/Downloads/scorpytech-official-website/scorpytech-website/render.yaml).
5. Provide your production SMTP credentials when prompted (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`).
6. Click **Apply** to automatically provision, build, and deploy the full-stack web service with automatic health checks (`/api/health`).
