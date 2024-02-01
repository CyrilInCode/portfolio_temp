import type { Metadata } from 'next'
import Head from 'next/head';
import { Manjari } from 'next/font/google'
import './globals.css'



const inter = Manjari({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cyril Grosjean',
  description: 'Portfolio de Cyril Grosjean',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
       <Head>
        <link rel="icon" href={'/portfolio_temp/favicon.ico'} />
      </Head> 
      <body className={inter.className }>{children}</body>
    </html>
  )
}
