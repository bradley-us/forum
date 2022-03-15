import { useState, useRef } from 'react';
import CodeBox from './CodeBox'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'

import {Editable} from 'slate-react';

import Avatar from '../../../../assets/avatar-user.jpg'
import ButtonX from '../../../../app_components/layout/min_components/ButtonX'
import SlateEditor from '../../../../app_components/layout/markdown/SlateEditor';

const GiveResponse = () => {

  const [textProvider, setTextProvider] = useState(false)

  const onClick = event => {
    // Implement custom event logic...

    // When no value is returned, Slate will execute its own event handler when
    // neither isDefaultPrevented nor isPropagationStopped was set on the event
  };

  const onDrop = event => {
    // Implement custom event logic...

    // No matter the state of the event, treat it as being handled by returning
    // true here, Slate will skip its own event handler
    return true;
  };

  const onDragStart = event => {
    // Implement custom event logic...

    // No matter the status of the event, treat event as *not* being handled by
    // returning false, Slate will execute its own event handler afterward
    return false;
  };


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

          <div className='flex flex-col gap-2 w-full text-sm'>
            {
              textProvider ?
              (
                <div className='flex justify-start items-start flex-col gap-3'>
                  <SlateEditor></SlateEditor>
                  <ButtonX
                    onClick={() => setTextProvider(!textProvider)}
                    classNameBox='font-bold border border-slate-200'
                  >
                    Cancelar
                  </ButtonX>
                </div>
                
              )
              :
              (
                <div onClick={handlerTextProvider} className='cursor-text text-slate-400 w-full bg-slate-100 py-2 border border-slate-200 rounded-lg px-3'>
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