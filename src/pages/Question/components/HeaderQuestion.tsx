import { useState } from 'react'
import ContainerPagesX from '../../../app_components/layout/ContainerPagesX'
import ButtonX from '../../../app_components/layout/min_components/ButtonX';

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import Markdown from '../../../app_components/layout/markdown_tiptap/Markdown';

const HeaderQuestion = () => {
  return (
    <ContainerPagesX>
      <div className='p-5'>
        <div className='pb-5 border-b border-slate-200 dark:border-slate-700'>
          <h4 className='text-lg font-bold'>
            Escribe tu pregunta del <span>Módulo 1 de Angular</span>
          </h4>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 text-sm'>
          <div className='flex flex-col items-center justify-start w-full pt-5 font-bold sm:pl-10 sm:gap-10 sm:flex-row'>
            <h5 className='sm:min-w-[150px] sm:text-right'>Título de la pregunta</h5>
            <input
              className='w-full p-3 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600'
              placeholder='Escribe un título'
            />
          </div>
          <div className='flex flex-col items-center justify-start w-full font-bold sm:pl-10 sm:flex-row sm:gap-10'>
            <h5 className='sm:min-w-[150px] sm:text-right'>Categoría</h5>
            <select
              // value='#1'
              className='w-full p-3 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600'
            >
              <optgroup>
                <option value='#1' disabled>Selecciona una categoría</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col items-center justify-start w-full font-bold sm:pl-10 sm:flex-row sm:gap-10'>
            <h5 className='sm:min-w-[150px] sm:text-right'>Contenido</h5>
            <div className='flex flex-col items-start justify-end w-full gap-5'>
              <div className='relative flex flex-col w-full'>
                <div className='flex flex-col items-start justify-start gap-3'>
                  <Markdown
                    classNameToolbar={`justify-between`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ContainerPagesX>
  )
}

export default HeaderQuestion