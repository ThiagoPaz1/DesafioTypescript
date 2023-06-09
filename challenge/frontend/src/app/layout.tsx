import { Inter } from 'next/font/google'

// Styles and images
'./styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Products list'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
