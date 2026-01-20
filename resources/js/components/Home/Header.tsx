// Components/Home/Header.tsx
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { auth } = usePage().props;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
        >
          AcademyHub
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
            <Link href="/courses" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Cours</Link>
            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">À propos</Link>
            <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-5">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              aria-label="Changer le thème"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {auth.user ? (
              <Link
                href="/dashboard"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
              >
                Mon espace
              </Link>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium"
                >
                  Connexion
                </Link>
                <Link 
                  href="/register" 
                  className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
                >
                  S’inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}