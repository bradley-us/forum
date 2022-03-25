import React from 'react'
import ContainerPagesX from '../../../app_components/layout/ContainerPagesX'
import GiveResponse from './min_components/GiveResponse'
import MenuHeaderResponses from './min_components/MenuHeaderResponses'

import ResponseBox from './min_components/ResponseBox'

const BodyAskPanel = () => {
  return (
    <ContainerPagesX>
      <MenuHeaderResponses />
      
      <div className='w-full max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-gray-300'>
        <ResponseBox />
        <GiveResponse />
      </div>
    </ContainerPagesX>
  )
}

export default BodyAskPanel