import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IEEE NITJSR',
  description: 'The official IEEE Website of NIT JSR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex flex-col justify-center items-start px-6 min-h-screen py-10">
            {children}
          </main>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}