import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-3">
      <div className="flex items-center space-x-5  p-2">
        <Link href="/post">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
          ></img>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600  px-4 py-1 text-white ">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600  px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
