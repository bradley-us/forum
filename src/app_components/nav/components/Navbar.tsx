import SearchNav from './min_components/SearchNav'
import UserPanel from './min_components/UserPanel'

const Navbar = () : JSX.Element => {
  return (
    <div className='flex flex-wrap items-center justify-end sm:flex-row'>
        <div className='mx-2'>
            <SearchNav />
        </div>

        <div>
            <UserPanel />
        </div>
    </div>
  )
}

export default Navbar