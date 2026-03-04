import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <h1 className="mt-auto"></h1> */}
        <section className="row row-cols-2 row-cols-md-4 g-0">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};
