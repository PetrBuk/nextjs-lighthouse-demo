import Link from 'next/link'

const LandingHeader = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <h1 className="mb-24 text-5xl font-bold tracking-tighter md:text-6xl">
              Jednoduchá stránka pro srovnání rychlostí
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                Tento web slouží pouze pro srovnání rychlostí načítání a objemu
                načítaných dat za využití frameworků Next.js, Astro a Qwik.
              </p>
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                <div className="flex w-full sm:w-auto">
                  <Link className="btn btn-primary w-full sm:mb-0" href="/blog">
                    Blog
                  </Link>
                </div>
                <div className="flex w-full sm:w-auto">
                  <Link className="btn w-full" href="/login">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHeader
