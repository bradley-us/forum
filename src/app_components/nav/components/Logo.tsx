import logo from '../../../assets/logo/logoFavicon.svg'

const Logo = () => {
  return (
    <div className='flex flex-row flex-wrap'>
        <div className='w-44'>
            <img className='w-full' src={logo} alt='Hi' />
        </div>
    </div>
  )
}

export default Logo