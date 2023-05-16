import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins(
  {
    weight: "400",
    subsets: ["latin"]
  }
)

export const metadata = {
  title: 'Samarpit Santoki',
  description: 'Portfolio Of Samarpit Santoki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
