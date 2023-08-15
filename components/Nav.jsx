'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const comingSoonToast = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image width={100} height={100} className="h-12 w-12 rounded-full" src="/assets/images/user.jpg" alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-base font-medium text-gray-900">Anastasiya Lobanovskaya</p>
              <p className="mt-1 text-sm text-gray-500">
                We are excited about launching this feature. Please hold your interest upto our finishing touch
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-rose-600 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <nav className="flex-between w-full mb-10 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/icons/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
        <p className="max-sm:hidden font-satoshi font-semibold text-xl text-black tracking-wide">Muse Mark</p>
      </Link>

      {/* Desktop Navigation  */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="#" className="theme-nav-btn" onClick={() => comingSoonToast()}>
            Create Post
          </Link>
          <button type="button" className="theme-outline-btn" onClick={() => comingSoonToast()}>
            Sign Out
          </button>
          <Link href="/profile">
            <Image src="/assets/images/user.jpg" width={37} height={37} className="rounded-full" alt="Profile" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/user.jpg"
            width={37}
            height={37}
            className="rounded-full"
            alt="Profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />

          {toggleDropdown && (
            <div className="theme-dropdown">
              <Link href="#" className="theme-dropdown-link" onClick={() => setToggleDropdown(false)}>
                My Profile
              </Link>
              <Link href="#" className="theme-dropdown-link" onClick={() => setToggleDropdown(false)}>
                Create a post
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
