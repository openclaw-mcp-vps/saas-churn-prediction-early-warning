import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Predict Customer Churn 30 Days Early',
  description: 'Analyzes user behavior, support tickets, and usage metrics to predict churn with actionable intervention recommendations for SaaS teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1f32aa2f-3562-4237-a8d8-57775cbb4540"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
