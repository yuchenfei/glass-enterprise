'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import Logo from './logo'
import NavLinks from './nav-links'
import NavLinksMobile from './nav-links-mobile'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
        <NavLinks />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a className="text-sm/6 font-semibold text-gray-900" href="#"> */}
          {/*   Log in <span aria-hidden="true">&rarr;</span> */}
          {/* </a> */}
        </div>
      </nav>
      <NavLinksMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  )
}
