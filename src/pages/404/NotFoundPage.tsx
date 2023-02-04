import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404 Not Found</h1>
      <p className='not-found__text'>
        It looks like you&apos;re lost. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a className={'not-found__link'} href='/'>Go back to home page</a>
    </div>
  );
};

export default NotFoundPage;