import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'KethCorrige',
  description: 'Correcao de redacoes para concursos',
  icons:{
    icon:['/favicon.ico?=4'],
    apple:['/apple-touch-icon.png?=4'],
    shortcut:['/apple-touch-icon.png'],

  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
