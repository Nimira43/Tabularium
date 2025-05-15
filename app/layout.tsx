import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Tabularium',
  description: 'Admin dashboard using Next JS, Tailwind, TypeScript and Shadcn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <div className='flex'>
          <div>
            <Sidebar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
