import React from 'react'
import SelectForumPanel from '../../../app_components/layout/min_components/SelectForumPanel'

const BodyAskPanel = () => {
  return (
    <>
      <div className='w-full mt-7'>
        <div className='w-11/12 max-w-[1280px] mx-auto dark:rounded-lg dark:bg-slate-800'>
          <div className='flex flex-row items-center justify-between w-full px-3 py-3 dark:text-gray-300'>
            <div className='text-sm font-bold'>
              4 respuestas
            </div>

            <div>
              <SelectForumPanel />
            </div>
          </div>
          <div className='w-full max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-gray-300'>
            hola
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyAskPanel