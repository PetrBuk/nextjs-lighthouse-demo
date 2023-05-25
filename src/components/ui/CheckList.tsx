import Image from 'next/image'

import Header from './Header'

type CheckListProps = {
  header?: {
    title: string
    subtitle: string
  }
  overview: string
  items: {
    title: string
    description: string
  }[]
  image: {
    src: string
    alt: string
  }
  isReversed?: boolean
}

const CheckList = ({
  header,
  overview,
  items,
  image,
  isReversed,
}: CheckListProps) => (
  <section className="w-screen bg-blue-50 dark:bg-slate-800">
    <div className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8`}>
      {header && <Header title={header.title} subtitle={header.subtitle} />}
      <div className="mx-auto max-w-6xl text-left md:px-8">
        <div
          className={`md:flex ${
            isReversed ? 'md:flex-row-reverse' : ''
          } md:gap-16`}
        >
          <div className="self-center md:basis-1/2">
            {overview && (
              <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
                {overview}
              </div>
            )}
            {items && (
              <div className="space-y-8">
                {items.map(({ title, description }, index) => (
                  <div key={`item-content-${index}`} className="flex">
                    <div className="shrink-0">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                        <div className="h-6 w-6 text-white">
                          <span className="material-symbols-outlined">
                            done
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {title && (
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          {title}
                        </h3>
                      )}
                      {description && (
                        <p className="mt-2 text-gray-600 dark:text-slate-400">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div aria-hidden="true" className="m-auto md:basis-1/2">
            {image && (
              <div className="relative m-auto max-w-4xl">
                <Image
                  src={image.src}
                  width={500}
                  height={500}
                  alt={image.alt}
                  sizes="(max-width: 768px) 100vw, 432px"
                  className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CheckList
