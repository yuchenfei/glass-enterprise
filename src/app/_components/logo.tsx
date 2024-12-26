import Image from 'next/image'

export default function Logo() {
  return (
    <a className="-m-1.5 flex items-center gap-x-2.5 p-1.5" href="#">
      <Image
        className="h-8 w-auto"
        src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        alt="Logo"
        height={32}
        width={32}
      />
      <p className="text-base/7 font-semibold text-gray-900 lg:text-sm/6">Company Name</p>
    </a>
  )
}
