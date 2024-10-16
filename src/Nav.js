import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='she'>


<ul>
  <li><Link to="/sign" className='lin'>Signin</Link></li>
  <li><Link to="/log" className='lin'>Login</Link></li>
  <li><Link to="/val" className='=lin'>Valid</Link></li>
 </ul>

    </div>
  )
}

export default Nav

