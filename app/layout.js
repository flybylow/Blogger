import './globals.css'

export const metadata = {
  title: 'Ward de Muynck - Product Designer',
  description: 'Personal portfolio and blog of Ward de Muynck, Product Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <a href="/" className="text-2xl font-bold text-gray-800">
                Ward de Muynck
              </a>
              <nav className="space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 py-6 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Ward de Muynck. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 