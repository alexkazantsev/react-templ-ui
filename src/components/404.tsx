import { Link } from '@tanstack/react-router';

export const NotFound = () => {
  return (
    <>
      <h1 className={'text-center text-gray-800 dark:text-gray-200'}>
        404 Page Not Found
      </h1>
      <Link to="/">Start Over</Link>
    </>
  );
};
