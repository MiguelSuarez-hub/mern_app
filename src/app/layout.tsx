import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {children}
          {/* @ts-expect-error Server Component */}
          <Navbar />
        </Providers>
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}
