import React from 'react'
import ContainerPagesX from '../../../app_components/layout/ContainerPagesX'
import SlateEditor from '../../../app_components/layout/markdown/SlateEditor';
import ButtonX from '../../../app_components/layout/min_components/ButtonX';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import SmIconX from '../../../app_components/layout/min_components/SmIconX';

const HeaderQuestion = () => {
  return (
    <ContainerPagesX>
      <div className='p-5'>
        <div className='border-b border-slate-200 dark:border-slate-700 pb-5'>
          <h4 className='font-bold text-lg'>
            Escribe tu pregunta del <span>Módulo 1 de Angular</span>
          </h4>
        </div>

        <div className='flex flex-col gap-3 justify-center items-center text-sm'>
          <div className='flex font-bold flex-row justify-start items-center w-full gap-10 pl-10 pt-5'>
            <h5 className='min-w-[150px] text-right'>Título de la pregunta</h5>
            <input
              className='border rounded-md p-3 w-full outline-none'
              placeholder='Escribe un título'
            />
          </div>
          <div className='flex font-bold flex-row justify-start items-center w-full gap-10 pl-10'>
            <h5 className='min-w-[150px] text-right'>Categoría</h5>
            <select
              // value='#1'
              className='border rounded-md p-3 w-full outline-none'
            >
              <optgroup>
                <option value='#1' disabled>Selecciona una categoría</option>
              </optgroup>
            </select>
          </div>
          <div className='flex font-bold flex-row items-start w-full gap-10 pl-10'>
            <h5 className='min-w-[150px] text-right'>Contenido</h5>
            <div className='flex flex-col gap-5 justify-end items-start w-full'>
              <div className='w-full flex flex-col relative'>
                <SlateEditor></SlateEditor>
              </div>
              <div>
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
    </ContainerPagesX>
  )
}

export default HeaderQuestion