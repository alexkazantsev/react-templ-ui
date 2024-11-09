import type React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_landing/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p className={'text-center text-gray-800 dark:text-gray-200'}>
      Signup Page
    </p>
  );
}
