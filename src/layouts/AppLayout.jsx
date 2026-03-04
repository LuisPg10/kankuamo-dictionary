import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <h1 className="mt-auto"></h1> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
