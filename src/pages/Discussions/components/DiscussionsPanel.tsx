import React from 'react'
import BodyDiscussionsPanel from './BodyDiscussionsPanel'
import HeaderDiscussionsPanel from './HeaderDiscussionsPanel'
import Header from '../../../app_components/nav/Header'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const DiscussionsPanel = () => {

  const displayNone = {
    display: 'none'
  }
  
  return (
    <div>
      <Header logoVisibility={displayNone} bgColor={`bg-[#fff]`}>
        <div>
          <div
            className='flex flex-row items-center justify-center gap-1 px-3 py-2 text-sm font-bold text-gray-600 rounded-lg cursor-pointer dark:text-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-300 bg-slate-200'
          >
            <span><KeyboardBackspaceIcon sx={{fontSize: '16px'}} /></span> Volver
          </div>
        </div>
      </Header>
        
      <HeaderDiscussionsPanel />
      
      <BodyDiscussionsPanel />
    </div>
  )
}

export default DiscussionsPanel