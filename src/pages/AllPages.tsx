import Ask from './Asks/Ask'
import Discussions from './Discussions/Discussions'
import Home from './Home/Home'

const AllPages = () : JSX.Element => {
  return (
    <div className='mx-auto'>
        {/* <Discussions /> */}
        {/* <Home /> */}
        <Ask />
    </div>
  )
}

export default AllPages