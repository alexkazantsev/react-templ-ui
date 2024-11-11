import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { NotFound } from '../components/404';
import type { QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<{ client: QueryClient }>()({
  notFoundComponent: () => <NotFound />,
  component: () => (
    <main>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </main>
  ),
});
