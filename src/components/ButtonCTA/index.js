import React from 'react'
import styles from './styles/buttonCTA.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ButtonCTA( ) {

  const location = useLocation();

  const [page, setPage] = useState( () => {
    if (location.pathname === '/cities') {
      return 'cities';
    }else{
      return '/';
    }
  });

  const renderPage = () => {
    switch (page) {
      case 'cities':
        return ( <>  <LinkRouter to='/'> <button type="button"  > 'Back to Home'</button> </LinkRouter>     </>  );
      default:
        return ( <> <LinkRouter to='/cities'> <button type="button"> 'Explore Cities'</button> </LinkRouter>  </> );
    }
  };

  return renderPage();
}

