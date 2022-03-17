import Ask from './Asks/Ask'
import Discussions from './Discussions/Discussions'
import Home from './Home/Home'
import Question from './Question/Question'

const AllPages = () : JSX.Element => {
  return (
    <div className='pb-20 mx-auto'>
        {/* <Discussions /> */}
        <Home />
        {/* <Ask /> */}
        {/* <Question /> */}
    </div>
  )
}

export default AllPages