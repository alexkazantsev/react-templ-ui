import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '../components/dashboard/sidebar';
import { DashboardHeader } from '../components/dashboard/header';

export const Route = createFileRoute('/_dashboard')({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className={'flex h-screen bg-gray-100 dark:bg-gray-700'}>
      <Sidebar />
      <div className={'flex flex-1 flex-col overflow-y-auto'}>
        <DashboardHeader />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
