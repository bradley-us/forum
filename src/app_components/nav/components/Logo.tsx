import { useState } from 'react'
import logo from '../../../assets/logo/logoFavicon.svg'
import logoWhite from '../../../assets/logo/logoFaviconWhite.svg'
import { Link } from 'react-router-dom'

const Logo = ({logoVisibility} : {logoVisibility?: object}) => {
  return (
    <div style={logoVisibility} className='flex flex-row flex-wrap'>
        <div className='w-44'>
          <Link to='/'><img className='w-full' src={logo} alt='Hi' /></Link>
        </div>
    </div>
  )
}

export default Logo