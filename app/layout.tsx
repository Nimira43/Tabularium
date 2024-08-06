import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "NimiraTech Dashboard",
  description: "Next JS with Shadcn project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="flex">
          <div className='hidden md:block h-[100vh]'>
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
