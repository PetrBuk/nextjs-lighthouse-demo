import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Footer from './Footer'
import Navigation from './Navigation'
import NavigationModal from './NavigationModal'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <header className="flex w-full items-center justify-between p-8">
        <div className="flex">
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image
                  src="/images/logo.svg"
                  alt="Page logo"
                  width={54}
                  height={44}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <Navigation />
          <NavigationModal />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
