import Image from 'next/image'
import Link from 'next/link'

import Navigation from './Navigation'
import NavigationModal from './NavigationModal'

const Header = () => {
  return (
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
  )
}

export default Header
