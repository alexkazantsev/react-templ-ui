import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_landing/prices')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p className={'text-center text-gray-800 dark:text-gray-200'}>
      Prices Page
    </p>
  );
}
