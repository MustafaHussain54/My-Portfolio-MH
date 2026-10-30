import './globals.css'

export const metadata = {
  title: 'Mustafa Hussain | Full-Stack Developer',
  description: 'Portfolio of Mustafa Hussain, Computer Science Engineering graduate focused on full-stack development, APIs, and automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
