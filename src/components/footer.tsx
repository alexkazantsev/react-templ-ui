import type React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-5 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-800 dark:text-gray-200">
          Created by{' '}
          <a
            className="text-center font-medium text-gray-800 underline decoration-2 underline-offset-2 hover:text-gray-200 hover:decoration-white/70 focus:text-gray-200 focus:decoration-white/70 focus:outline-none dark:text-gray-200"
            href="https://www.linkedin.com/in/okazantsev/"
          >
            Alex Kazantsev
          </a>
        </p>
      </div>
    </footer>
  );
};
