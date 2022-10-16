import Link from 'next/link'

const Footer = () => {
  const social = [
    {
      id: 1,
      name: 'instagram',
      href: '#',
    },
    {
      id: 2,
      name: 'telegram',
      href: '#',
    },
    {
      id: 3,
      name: 'whatsapp',
      href: '#',
    },
  ]


  return (
    <footer className="bg-gray-100">
      <div className="container p-4 md:px-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="title-font font-medium text-gray-900 text-2xl">
            De’mud
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          2022
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {social.map((item) => (
            <a
              className="ml-3 text-gray-500 hover:text-gray-600 transition-colors"
              key={item.id}
              href={item.href}
            >
              <svg className="icon w-5 h-5">
                <use xlinkHref={`#${item.name}`}></use>
              </svg>
            </a>
          ))}
        </span>
      </div>
    </footer>
  )
}

export default Footer
