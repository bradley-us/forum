import ButtonX from '../../../app_components/layout/min_components/ButtonX'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import CodeBox from './min_components/CodeBox'
import ContainerPagesX from '../../../app_components/layout/ContainerPagesX'

const HeaderAskPanel = () => {
  return (
    <ContainerPagesX>
      <div className='px-5'>
        <div className='py-5'>
          <div
            className='inline px-2 py-1 text-xs font-bold rounded-md bg-emerald-100 text-emerald-600'
          >
            Angular / Módulo 1
          </div>
        </div>

        <div className='flex flex-row justify-between pb-5 border-b dark:border-slate-600 border-slate-200'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-lg font-bold'>Título de la pregunta explicado por usuario</h1>
            <p className='text-xs text-slate-400'>Subido por <span className='font-bold'>@username</span> hace <span>24</span> días</p>
          </div>

          <div>
            <ButtonX
              iconBtn={<PersonAddAltIcon sx ={{fontSize: 18}} />}
              classNameBox='border border-slate-200 text-xs font-bold'
            >
              Seguir pregunta
            </ButtonX>
          </div>
        </div>

        <div className='py-5 text-sm font-medium border-b dark:border-slate-600 border-slate-200'>
          <div className='flex flex-col gap-2'>
            <p>In many front-end framework (https://......w..wc.com), it is possible
            to match a route to personalize the style</p>
            <p>How to do the same using edge</p>
          </div>

          <CodeBox>
            {`
  p { color: red; }
    body { background-color: #eee; }
      bordy
            `}
          </CodeBox>

          <div className='flex flex-col gap-2'>
            <p>Thanks a lot!</p>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between py-5 text-xs'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <ButtonX
              iconBtn={<ThumbUpOutlinedIcon sx={{fontSize: 18}} />}
              classNameBox='font-bold !rounded-full border !py-2 border-emerald-200 !px-3 text-green-600'
            >
              123
            </ButtonX>

            <ButtonX
              iconBtn={<ThumbDownAltOutlinedIcon sx={{fontSize: 18}} />}
              classNameBox='font-bold !rounded-full border !py-2 border-red-500 !px-3 text-red-500'
            >
              12
            </ButtonX>

            <ButtonX
              iconBtn={<MapsUgcOutlinedIcon sx={{fontSize: 18}} />}
              classNameBox='dark:text-gray-300 border border-slate-400 !py-2 !px-3 text-slate-800 font-bold'
            >
              Responder
            </ButtonX>
          </div>

          <div>
            <ButtonX
              iconBtn={<PushPinOutlinedIcon sx={{fontSize: 18}} />}
              classNameBox='dark:bg-slate-800 dark:border-slate-600 dark:border dark:text-gray-300 bg-slate-200 !px-5 text-gray-600 font-bold'
            ></ButtonX>
          </div>
        </div>
      </div>
    </ContainerPagesX>
  )
}

export default HeaderAskPanel