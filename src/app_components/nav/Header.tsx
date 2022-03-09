import logo from '../../assets/logo/logoFavicon.svg'
import SearchNav from './components/SearchNav'
import UserPanel from './components/UserPanel'

const Header = () => {
  return (
    <>
        <header className='flex flex-row w-full flex-wrap justify-between py-4 px-6 items-center'>
            <div className='flex flex-row flex-wrap'>
                <div className='w-44'>
                    <img className='w-full' src={logo} alt='Hi' />
                </div>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-center'>
                <div className='mx-2'>
                    <SearchNav />
                </div>

                <div>
                    <UserPanel />
                </div>
            </div>
                
        </header>
    </>
  )
}

export default Header