import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className="z-50 mb-auto flex w-full flex-wrap py-4 text-sm sm:flex-nowrap sm:justify-start">
      <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold text-gray-900 focus:opacity-80 focus:outline-none dark:text-gray-200"
            to="/"
            aria-label="Brand"
          >
            Brand
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg border border-white/10 text-sm font-medium text-gray-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
              id="hs-navbar-cover-page-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-cover-page"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-cover-page"
            >
              <svg
                className="hs-collapse-open:hidden size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={'2'}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-cover-page"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
          aria-labelledby="hs-navbar-cover-page-collapse"
        >
          <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
            <Link
              className="font-medium text-gray-900 hover:text-gray-600 focus:text-gray-800 focus:outline-none dark:text-gray-300 dark:focus:text-gray-300"
              to="/products"
              aria-current="page"
            >
              Products
            </Link>
            <Link
              className="font-medium text-gray-900 hover:text-gray-600 focus:text-gray-800 focus:outline-none dark:text-gray-300 dark:focus:text-gray-300"
              to="/prices"
            >
              Prices
            </Link>
            <a
              className="font-medium text-gray-900 hover:text-gray-600 focus:text-gray-800 focus:outline-none dark:text-gray-300 dark:focus:text-gray-300"
              href="/about"
            >
              About
            </a>
            <Link
              className="font-medium text-gray-900 hover:text-gray-600 focus:text-gray-800 focus:outline-none dark:text-gray-300 dark:focus:text-gray-300"
              to="/login"
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
