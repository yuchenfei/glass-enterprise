import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: SquaresPlusIcon,
  },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function NavLinks() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link className="text-sm/6 font-semibold text-gray-900" href="/">
        Home
      </Link>

      <Popover>
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          Product
          <ChevronDownIcon className="size-5 flex-none text-gray-400" aria-hidden="true" />
        </PopoverButton>

        <PopoverPanel
          className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          transition
        >
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {products.map((item) => (
              <div
                className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                key={item.name}
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <a className="mt-6 block font-semibold text-gray-900" href={item.href}>
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    href={item.href}
                    key={item.name}
                  >
                    <item.icon className="size-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>

      <Link className="text-sm/6 font-semibold text-gray-900" href="/about">
        About
      </Link>
    </PopoverGroup>
  )
}
