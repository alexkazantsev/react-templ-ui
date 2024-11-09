import { createFileRoute } from '@tanstack/react-router';
import type React from 'react';

export const Route = createFileRoute('/_landing/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p className={'text-center text-gray-800 dark:text-gray-200'}>Login Page</p>
  );
}
