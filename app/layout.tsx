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
          <div className='hidden md:block h-[100vh] w-[300px]'>
            <Sidebar />
          </div>
          <div className='p-5 w-full md:max-w-[1140px]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
