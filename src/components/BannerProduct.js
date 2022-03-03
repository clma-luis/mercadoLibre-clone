/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'HASTA UN 30% DSCTO',
      description: 'ESPECIAL DEPORTES',
      imageSrc: 'https://http2.mlstatic.com/D_NQ_982984-MLA49226143387_022022-C.webp',
      imageAlt: 'sports',
      href: '#',
    },
    {
      name: 'HASTA UN 30% DSCTO',
      description: 'MUNDO GAMER',
      imageSrc: 'https://http2.mlstatic.com/D_NQ_757265-MLA49206289321_022022-C.webp',
      imageAlt: 'gamer',
      href: '#',
    },
    {
      name: 'HASTA UN 30% DSCTO',
      description: 'HOME OFFICE',
      imageSrc: 'https://http2.mlstatic.com/D_NQ_695298-MLA49226179424_022022-C.webp',
      imageAlt: 'home office',
      href: '#',
    },
  ]
  
  export default function BannerProduct() {
    return (
      <div className="bg-gray-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16  lg:max-w-none">
            <h2 className="mb-6 text-4xl text-gray-400">Te puede interesar</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xs text-emerald-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  