import Logo from './components/Logo'
import NavBar from './components/Navbar'
import DarkModeSwitcher from './components/toggleDarkMode/DarkModeSwitcher'

const Header = ({logoVisibility, bgColor, children} : {logoVisibility?: object, bgColor?: string, children?: any}) : JSX.Element => {
  return (
    <header className={`${bgColor} dark:bg-gray-900 flex flex-row w-full flex-wrap justify-between py-4 px-6 items-center`}>
        <Logo logoVisibility={logoVisibility}/>
        {children}
        <DarkModeSwitcher />
        <NavBar />
    </header>
  )
}

export default Header