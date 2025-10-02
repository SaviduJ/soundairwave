"use client";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-100 to-white text-green-700 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-full text-xl md:text-2xl
                       font-semibold bg-white bg-opacity-30 hover:bg-opacity-50
                       text-green-700 hover:text-green-800 shadow-md hover:shadow-lg
                       transition-all transform hover:scale-105"
          >
            🌱 Sound Air & Water Solutions
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block relative">
          <ul className="flex space-x-6 text-sm md:text-base font-medium items-center">
            <li>
              <Link href="/" className="hover:text-green-800 transition-colors">
                Home
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-green-800 transition-colors flex items-center gap-1"
              >
                Services ▾
              </button>

              {dropdownOpen && (
                <ul className="absolute top-full left-0 bg-white text-green-700 rounded-xl shadow-lg mt-2 min-w-[220px] z-50 py-2">
                  <li className="px-5 py-2 hover:bg-green-50 rounded-lg">
                    <Link href="/services/water-quality">Water Quality Solutions</Link>
                  </li>
                  <li className="px-5 py-2 hover:bg-green-50 rounded-lg">
                    <Link href="/services/sound-quality">Sound Quality Solutions</Link>
                  </li>
                  <li className="px-5 py-2 hover:bg-green-50 rounded-lg">
                    <Link href="/services/air-pollution">Air Pollution Control</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/about" className="hover:text-green-800 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-green-800 transition-colors">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-600 transition">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg text-green-700 px-6 py-4">
          <ul className="flex flex-col space-y-4 font-medium">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1"
              >
                Services ▾
              </button>
              {dropdownOpen && (
                <ul className="mt-2 bg-green-50 rounded-lg shadow-inner py-2">
                  <li className="px-5 py-2 hover:bg-green-100 rounded-lg">
                    <Link
                      href="/services/water-quality"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Water Quality Solutions
                    </Link>
                  </li>
                  <li className="px-5 py-2 hover:bg-green-100 rounded-lg">
                    <Link
                      href="/services/sound-quality"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sound Quality Solutions
                    </Link>
                  </li>
                  <li className="px-5 py-2 hover:bg-green-100 rounded-lg">
                    <Link
                      href="/services/air-pollution"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Air Pollution Control
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-green-100 text-green-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sound Air & Water Solutions. All rights reserved.
      </footer>
    </div>
  );
}
