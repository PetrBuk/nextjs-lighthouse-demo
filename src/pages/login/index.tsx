import Head from 'next/head'

import LoginForm from '@project/components/login/LoginForm'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Přihlášení</title>
      </Head>
      <LoginForm />
    </div>
  )
}

export default Login
