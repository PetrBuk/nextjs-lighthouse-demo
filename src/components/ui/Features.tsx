import Header from './Header'

type FeaturesProps = {
  header?: {
    title: string
    subtitle: string
  }
  items: {
    title: string
    description: string
    icon: string
  }[]
}

const Features = ({ header, items }: FeaturesProps) => (
  <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
    {header && <Header title={header.title} subtitle={header.subtitle} />}
    <div className="mx-auto grid space-y-6 md:grid-cols-2 md:space-y-0">
      {items.map(({ title, description, icon }, index) => (
        <div key={`item-feature-${index}`} className="space-y-8 sm:px-8">
          <div className="flex md:max-w-md">
            <div className="mb-4 mr-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-700">
                {icon && (
                  <div className="h-6 w-6 text-white">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-0 text-left md:mb-8">
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="text-gray-600 dark:text-slate-400">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Features
