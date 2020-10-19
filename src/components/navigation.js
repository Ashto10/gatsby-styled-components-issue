import React from 'react'
import { Link } from 'gatsby'

import NavigationContainer from '../theme/navigation'

export default function Navigation({ pathname }) {
  return (
    <NavigationContainer isOnHome={pathname === '/'}>
      {console.log(pathname === '/')}
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </NavigationContainer>
  )
}
