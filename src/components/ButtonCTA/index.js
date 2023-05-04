import React from 'react'
import './styles/buttonCTA.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function ButtonCTA(  { buttonText, buttonLink }  ) {

        return (
          <>
            <LinkRouter to={buttonLink}> <button type="button" className="buttonCTA"> {buttonText} </button> </LinkRouter>
          </>
        );
    }

