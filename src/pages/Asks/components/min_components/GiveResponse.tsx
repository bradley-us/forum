import { useState } from 'react';
import Avatar from '../../../../assets/avatar-user.jpg'
import ButtonX from '../../../../app_components/layout/min_components/ButtonX'

import Markdown from '../../../../app_components/layout/markdown_tiptap/Markdown'

const GiveResponse = () => {

  const [textProvider, setTextProvider] = useState(false)

  const handlerTextProvider = () => {
    setTextProvider(!textProvider)
  }

  return (
    <div className='border-b last:border-none'>
      <div className='w-full px-5 mx-auto'>
        <div className={`flex flex-row ${textProvider? 'items-start':'items-center'} justify-center gap-5 py-5`}>
          <figure className='w-9'>
            <img className='rounded-full' src={Avatar} alt='Profile pic' />
          </figure>

          <div className='flex flex-col w-full gap-2 text-sm'>
            {
              textProvider ?
              (
                <div className='flex flex-col items-start justify-start gap-3'>
                    <Markdown
                      classNameToolbar={`justify-between`}
                    />
                   
                    <div className='flex flex-row items-center justify-start gap-2'>
                      <ButtonX
                        onClick={() => setTextProvider(!textProvider)}
                        classNameBox='font-bold border border-slate-200'
                      >
                        Cancelar
                      </ButtonX>
                      <ButtonX
                      classNameBox='bg-emerald-500 text-white'
                      >
                        Subir pregunta
                      </ButtonX>
                    </div>
                </div>
                
              )
              :
              (
                <div onClick={handlerTextProvider} className='w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-600 cursor-text text-slate-400 bg-slate-100 border-slate-200'>
                  Escribe una respuesta
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveResponse