import React from 'react';

const Navigation = ({ isMenuOpen }) => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`${
        isMenuOpen
          ? 'absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:shadow-none'
          : 'hidden'
      } md:block md:static`}
    >
      <ul className="flex flex-col md:flex-row md:items-center md:gap-8 p-4 md:p-0">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block py-2 md:py-0 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
