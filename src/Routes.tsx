import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './shared/components/loaders/Loading';

/* Lazy load pages */
// Home page
const Home = lazy(() => import('./pages/Home/Home'));

// 404 page
const NotFoundPage = lazy(() => import('./pages/404/NotFoundPage'));

const RoutesFile = () => {

  const closeExtraMenu = () => {
    // get main class
    const extraMenu = document.querySelector('.extra-menu');
    if (extraMenu) {
      extraMenu.setAttribute('visibility', 'hidden');
    }
  };

  return (
    <main className='main-router-display' onClick={closeExtraMenu}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />

          {/*   Not-found pages */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default RoutesFile;