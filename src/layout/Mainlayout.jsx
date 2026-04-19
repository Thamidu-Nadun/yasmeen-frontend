import {Fragment} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';

const Mainlayout = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Mainlayout;
