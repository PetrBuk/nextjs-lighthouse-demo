import Link from 'next/link'

import { routes } from '../../catalogs/routes'

const Navigation = () => {
  return (
    <div className="hidden sm:block">
      {routes.map((route) => (
        <Link
          key={route.title}
          href={route.href}
          className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
        >
          {route.title}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
