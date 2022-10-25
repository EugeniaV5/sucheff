import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

const AppBar = () => {
  return (
    <div>
      <Header />
      <Suspense fallback="">
        <Outlet />
      </Suspense>{' '}
    </div>
  );
};

export default AppBar;
