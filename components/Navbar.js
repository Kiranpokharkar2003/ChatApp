'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  // const user = useUser()
  // console.log(user.user?.id);

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const desktopLinkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <UserButton />
          <Link href="/" className="text-white text-2xl font-bold ml-4">
            My ChatApp
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h14"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:items-center">
          <ul className="flex space-x-4 items-center">
            <li>
              <motion.a
                href="/"
                className={`text-white hover:text-gray-300 block py-2 px-4 ${pathname === '/' ? 'text-blue-500' : ''}`}
                variants={desktopLinkVariants}
                whileHover="hover"
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/forums"
                className={`text-white hover:text-gray-300 block py-2 px-4 ${pathname === '/forums' ? 'text-blue-500' : ''}`}
                variants={desktopLinkVariants}
                whileHover="hover"
              >
                Forums
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/chat"
                className={`text-white hover:text-gray-300 block py-2 px-4 ${pathname === '/chat' ? 'text-blue-500' : ''}`}
                variants={desktopLinkVariants}
                whileHover="hover"
              >
                UserChat
              </motion.a>
            </li>
          </ul>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-gray-800 z-50 p-4 flex flex-col items-end"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <button onClick={toggleMenu} className="absolute top-4 left-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col space-y-4 w-full">
                <li>
                  <motion.a
                    href="/"
                    className={`text-white hover:text-gray-300 py-2 px-4 block w-full text-right ${pathname === '/' ? 'text-blue-500' : ''}`}
                    onClick={toggleMenu}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Home
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/forums"
                    className={`text-white hover:text-gray-300 py-2 px-4 block w-full text-right ${pathname === '/forums' ? 'text-blue-500' : ''}`}
                    onClick={toggleMenu}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Forums
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/chat"
                    className={`text-white hover:text-gray-300 py-2 px-4 block w-full text-right ${pathname === '/chat' ? 'text-blue-500' : ''}`}
                    onClick={toggleMenu}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    UserChat
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;