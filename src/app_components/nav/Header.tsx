import Logo from './components/Logo'
import NavBar from './components/Navbar'
import DarkModeSwitcher from './components/toggleDarkMode/DarkModeSwitcher'

const Header = () : JSX.Element => {
  return (
    <header className='dark:bg-gray-900 flex flex-row w-full flex-wrap justify-between py-4 px-6 items-center'>
        <Logo />
        <DarkModeSwitcher />
        <NavBar />
    </header>
  )
}

export default Header