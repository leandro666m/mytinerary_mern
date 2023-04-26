import React from 'react'
import styles from './styles/buttonCTA.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function ButtonCTA(props) {

  if (props.texto == 'Explore Cities') {
    return (
      <>
        <LinkRouter to='/cities'>
          <button type="button"  > 'Explore Cities'</button>
        </LinkRouter>
      </>
    )
  } else if(props.texto == 'Home'){
    return (
      <>
        <LinkRouter to='/'>
          <button type="button"  > 'Home'</button>
        </LinkRouter>
      </>
    )
  }

}
