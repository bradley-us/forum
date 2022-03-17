import { useState } from 'react'
import logo from '../../../assets/logo/logoFavicon.svg'
import logoWhite from '../../../assets/logo/logoFaviconWhite.svg'

const Logo = ({logoVisibility} : {logoVisibility?: object}) => {
  return (
    <div style={logoVisibility} className='flex flex-row flex-wrap'>
        <div className='w-44'>
          <img className='w-full' src={logo} alt='Hi' />
        </div>
    </div>
  )
}

export default Logo