import '@/app/globals.css';

export const metadata = {
  title: 'Seasoned Senior LLC',
  description: 'Personal Information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className='bg-white'>{children}</body>
    </html>
  )
}
