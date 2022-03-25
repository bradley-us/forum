import { useState } from 'react'
import LoadingPage from '../app_components/loadingPage/LoadingPage'
import Home from './Home/Home'

const AllPages = () : JSX.Element => {

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  
  setTimeout(() => {
    setIsLoadingPage(false)
  }, 500);

  return (
    <div className='mx-auto'>
      {
        isLoadingPage ?
        (<LoadingPage />)
        :
        (<Home />)
      }
    </div>
  )
}

export default AllPages