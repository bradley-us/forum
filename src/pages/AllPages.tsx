import { useEffect, useState } from 'react'
import LoadingPage from '../app_components/loadingPage/LoadingPage'
import Ask from './Asks/Ask'
import Discussions from './Discussions/Discussions'
import Home from './Home/Home'
import Question from './Question/Question'

const AllPages = () : JSX.Element => {

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  
  setTimeout(() => {
    setIsLoadingPage(false)
  }, 1500);

  return (
    <div className='mx-auto'>
      {
        isLoadingPage ?
        (<LoadingPage />)
        :
        (<Home />)
      }
      {/* <Discussions /> */}
      {/* <Ask /> */}
      {/* <Question /> */}
    </div>
  )
}

export default AllPages