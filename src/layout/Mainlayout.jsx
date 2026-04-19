import {Fragment} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';

const Mainlayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Mainlayout;
