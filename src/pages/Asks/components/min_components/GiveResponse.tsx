import CodeBox from './CodeBox'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'

import {Editable} from 'slate-react';

import Avatar from '../../../../assets/avatar-user.jpg'
import ButtonX from '../../../../app_components/layout/min_components/ButtonX'

const GiveResponse = () => {

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

  return (
    <div className='border-b last:border-none'>
      <div className='w-full px-5 mx-auto'>
        <div className='flex flex-row py-5 gap-3'>
          <figure className='w-9'>
            <img className='rounded-full' src={Avatar} alt='Profile pic' />
          </figure>

          <div className='flex flex-col gap-2 w-full text-sm'>
            <div className='w-full'>
            
            </div>
            <div className='flex flex-row gap-4 justify-start items-center text-xs'>
              <ButtonX
                iconBtn={<ThumbUpOutlinedIcon sx={{fontSize: 18}} />}
                classNameBox='font-bold !rounded-full border !py-2 border-emerald-200 !px-3 text-green-600'
              >
                1232
              </ButtonX>

              <ButtonX
                iconBtn={<ThumbDownAltOutlinedIcon sx={{fontSize: 18}} />}
                classNameBox='font-bold !rounded-full border !py-2 border-red-500 !px-3 text-red-500'
              >
                1
              </ButtonX>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveResponse