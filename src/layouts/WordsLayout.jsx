import { Outlet } from 'react-router';
import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';
import '../shared/css/layouts.css';

export const WordsLayout = () => {
  return (
    <div className="words-layout">
      <Header />
      <main className="position-relative">
        {/* <h1 className="mt-auto"></h1> */}
        <section className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
