import Logo from './components/Logo'
import NavBar from './components/Navbar'

const Header = ({logoVisibility, bgColor, children} : {logoVisibility?: object, bgColor?: string, children?: any}) : JSX.Element => {
  return (
    <header className={`${bgColor} dark:bg-gray-900 flex flex-row w-full flex-wrap justify-center gap-2 sm:gap-0 sm:justify-between py-4 px-6 items-center`}>
        <Logo logoVisibility={logoVisibility}/>
        {children}
        <NavBar />
    </header>
  )
}

export default Header