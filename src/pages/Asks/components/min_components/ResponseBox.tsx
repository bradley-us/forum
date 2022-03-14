import CodeBox from './CodeBox'
import PushPinIcon from '@mui/icons-material/PushPin'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'

import Avatar from '../../../../assets/avatar-user.jpg'
import ButtonX from '../../../../app_components/layout/min_components/ButtonX'

const ResponseBox = () => {
  return (
    <div className='border-b last:border-none'>
      <div className='w-full px-5 mx-auto'>
        <div className='flex flex-row justify-between items-center'>
          <div className='pt-5 flex flex-row gap-4 justify-start items-center'>
            <figure className='w-9'>
              <img className='rounded-full' src={Avatar} alt='Profile pic' />
            </figure>
            <div className='font-bold flex flex-col justify-center'>
              <h3 className='text-md'>username</h3>
              <p className='text-xs text-slate-400'>Publicado hace <span>12</span> días</p>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center gap-1'>
            <PushPinIcon className='text-emerald-400 !text-sm' />
            <span className='text-slate-400 font-bold text-[10px] uppercase'>fijado por moderadores</span>
          </div>
        </div>

        <div className='flex flex-row py-5 gap-3'>
          <CheckCircleRoundedIcon className='!text-md text-emerald-400' />

          <div className='flex flex-col gap-2 w-full text-sm'>
            <div className='w-full'>
              This is how I did it:
              <CodeBox>
                  {`
  p { color: red; }
  body { background-color: #eee; }
  bordy
                  `}
              </CodeBox>
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

export default ResponseBox