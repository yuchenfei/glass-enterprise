import { getProducts } from '@/lib/strapi'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import Banner from './_components/banner'

const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: TrashIcon,
  },
]

export default async function HomePage() {
  const products = await getProducts()

  console.log('Products:', products)

  return (
    <div>
      <Banner />
      <div>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <Image className="w-80" src="/007.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/351.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/350.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/349.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/348.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/347.jpg" alt="Burger" height={500} width={500} />
          </div>
          <div className="carousel-item">
            <Image className="w-80" src="/346.jpg" alt="Burger" height={500} width={500} />
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Stay on top of customer support
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
              cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div className="flex flex-col" key={feature.name}>
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="size-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a className="text-sm/6 font-semibold text-indigo-600" href={feature.href}>
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* 产品展示部分 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 xl:gap-x-8" role="list">
          {products.map((product) => (
            <li className="" key={product.id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    className="scale-125"
                    src={product.image}
                    alt={product.name}
                    height={500}
                    width={500}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.name}
                    {product.isNew && <div className="badge badge-secondary">NEW</div>}
                  </h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    {product.categories.map((category) => (
                      <div className="badge badge-outline" key={category}>
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  Get in touch
                </h2>
                <p className="mt-4 text-base/7 text-gray-600">
                  Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Collaborate</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-indigo-600"
                          href="mailto:collaborate@example.com"
                        >
                          collaborate@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-2345</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Press</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-indigo-600"
                          href="mailto:press@example.com"
                        >
                          press@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-3456</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Join our team</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-indigo-600"
                          href="mailto:careers@example.com"
                        >
                          careers@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-4567</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Say hello</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-indigo-600"
                          href="mailto:hello@example.com"
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-5678</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  Locations
                </h2>
                <p className="mt-4 text-base/7 text-gray-600">
                  Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Los Angeles</h3>
                  <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                    <p>4556 Brendan Ferry</p>
                    <p>Los Angeles, CA 90210</p>
                  </address>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">New York</h3>
                  <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                    <p>886 Walter Street</p>
                    <p>New York, NY 12345</p>
                  </address>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Toronto</h3>
                  <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                    <p>7363 Cynthia Pass</p>
                    <p>Toronto, ON N3Y 4H8</p>
                  </address>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Chicago</h3>
                  <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                    <p>726 Mavis Island</p>
                    <p>Chicago, IL 60601</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
