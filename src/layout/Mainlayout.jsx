import {Fragment} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Mainlayout = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Mainlayout;
