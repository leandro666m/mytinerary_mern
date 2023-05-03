import React from 'react'
import './styles/buttonCTA.css'
import { Link as LinkRouter } from 'react-router-dom'

/* export default function ButtonCTA( ) {

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
        return ( <>  <LinkRouter to='/'> <button type="button" className="buttonCTA"  > 'Back to Home'</button> </LinkRouter>     </>  );
      default:
        return ( <> <LinkRouter to='/cities'> <button type="button" className="buttonCTA"> 'Explore Cities'</button> </LinkRouter>  </> );
    }
  }; 
  return renderPage();
}

 */
export default function ButtonCTA({ buttonText, buttonLink }) {

        return (
          <>
            <LinkRouter to={buttonLink}> <button type="button" className="buttonCTA"> {buttonText} </button> </LinkRouter>
          </>
        );
    }

