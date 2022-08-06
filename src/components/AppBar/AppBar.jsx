import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>{' '}
    </div>
  );
};

export default AppBar;
