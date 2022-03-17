import { useState } from 'react'
import ContainerPagesX from '../../../app_components/layout/ContainerPagesX'
import SlateEditor from '../../../app_components/layout/markdown/SlateEditor';
import ButtonX from '../../../app_components/layout/min_components/ButtonX';

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

const HeaderQuestion = () => {

  const [value, setValue] = useState('1');

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  // const stylesForSelectedTab = {
  //   borderRadius: '10px',
  //   border: '1px solid #ccc',
  //   bgcolor: 'white',
  //   minHeight: 0,
  //   p: '10px 10px',
  //   fontWeight: 'bold',
  //   color: '#444 !important'
  // }

  return (
    <ContainerPagesX>
      <div className='p-5'>
        <div className='pb-5 border-b border-slate-200 dark:border-slate-700'>
          <h4 className='text-lg font-bold'>
            Escribe tu pregunta del <span>Módulo 1 de Angular</span>
          </h4>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 text-sm'>
          <div className='flex flex-row items-center justify-start w-full gap-10 pt-5 pl-10 font-bold'>
            <h5 className='min-w-[150px] text-right'>Título de la pregunta</h5>
            <input
              className='w-full p-3 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600'
              placeholder='Escribe un título'
            />
          </div>
          <div className='flex flex-row items-center justify-start w-full gap-10 pl-10 font-bold'>
            <h5 className='min-w-[150px] text-right'>Categoría</h5>
            <select
              // value='#1'
              className='w-full p-3 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600'
            >
              <optgroup>
                <option value='#1' disabled>Selecciona una categoría</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-row items-start w-full gap-10 pl-10 font-bold'>
            <h5 className='min-w-[150px] text-right'>Contenido</h5>
            <div className='flex flex-col items-start justify-end w-full gap-5'>
              <div className='relative flex flex-col w-full'>
              <div className='flex flex-col items-start justify-start gap-3'>
                  <TabContext value={value}>
                    <SlateEditor
                      displayToggleToolbar={value === '2' ? '!hidden' : 'block'}
                      classNameToolbar={`justify-between ${value === '2' ? 'rounded-b-lg' : null}`}
                    >
                    </SlateEditor>
                  </TabContext>
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <ButtonX
                      classNameBox='bg-emerald-500 text-white'
                    >
                      Subir pregunta
                    </ButtonX>
                  </div>
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