import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Todos from '@project/components/todos/Todos'
import WorkProgress from '@project/components/ui/WorkProgress'

function Dashboard() {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (document) {
      const t = localStorage.getItem('token')
      setToken(t || '')
    }
  }, [])

  if (!token.length) {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="grid place-items-center">
          <h2>
            Pro načtení obsahu dashboard stránky se musíte nejdříve{' '}
            <Link href="/login">
              <span className=" text-blue-600">přihlásit</span>
            </Link>{' '}
            .
          </h2>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WorkProgress />
      <Todos />
    </>
  )
}

export default Dashboard
