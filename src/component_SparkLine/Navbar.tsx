"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0b2e]/80 backdrop-blur-md shadow-lg shadow-indigo-500/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <Sparkles className="h-8 w-8 text-[#f36b22] transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#f36b22] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl bg-[#f36b22] text-white px-2 font-bold ">
              SPARK
            </span>
            <span className="text-2xl font-light text-[#6366f1] ">
              LINE
            </span>
          </motion.a>

          <div className="hidden md:flex space-x-8">
            {['Mission', 'Services', 'Team', 'Masterclass', 'Contact'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </div>

          <motion.button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-[#484cb1]" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-0 bg-[#0a0b2e]/95 backdrop-blur-lg"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Mission', 'Services', 'Team', 'Masterclass', 'Contact'].map((item) => (
                  <MobileNavLink
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </MobileNavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="relative text-gray-200 hover:text-white transition-colors duration-300 group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f36b22] to-[#484cb1] transition-all duration-300 group-hover:w-full"></span>
  </motion.a>
)

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="text-3xl font-light text-white hover:text-[#f36b22] transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

export default Navbar
