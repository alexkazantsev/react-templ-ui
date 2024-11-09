import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_landing/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p className={'text-center text-gray-800 dark:text-gray-200'}>About Page</p>
  );
}
