import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Route = createFileRoute('/_landing')({
  component: LayoutComponent,
});

function LayoutComponent() {
  console.log(123);

  return (
    <div
      className={
        'mx-auto flex size-full h-screen w-auto flex-col bg-white dark:bg-gray-700'
      }
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
