import ButtonX from '../../../app_components/layout/min_components/ButtonX'
import AngularIcon from '../../../assets/cursos_logos/angularjs-original.svg'

import AddCommentIcon from '@mui/icons-material/AddComment'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';


const HeaderDiscussionsPanel = () => {
  return (
    <div className='bg-white border-b dark:bg-slate-800 dark:text-white'>
      <div>
        <div className='flex flex-col px-6 pt-5'>
          <div className='flex flex-row items-end justify-between w-full py-3'>
            <div className='flex flex-row items-center justify-start w-2/4 gap-5'>
              <div>
                <figure className='w-8'>
                  <img src={AngularIcon} alt='Programming Language Logo' />
                </figure>
              </div>
              <div>
                <div>
                  <h1 className='font-extrabold'>
                    Angular / Módulo 1
                  </h1>
                </div>
                <div>
                  <p className='text-sm font-[500]'>Aprendiendo a utilizar el framework</p>
                </div>
              </div>
            </div>
            
            <div className='flex flex-row items-center justify-end w-2/4 gap-2'>
              <ButtonX
                classNameBox='font-bold text-sm bg-emerald-100 text-emerald-500'
                iconBtn={<PersonOutlineIcon sx={{fontSize: '20px'}} />}
              >
                Siguiendo
              </ButtonX>

              <ButtonX
                classNameBox='text-sm font-bold bg-emerald-400 text-white'
                iconBtn={<AddCommentIcon sx={{fontSize: '20px'}} />}
              >
                Añadir pregunta
              </ButtonX>

              <ButtonX
                classNameBox='text-sm px-[25px] font-bold bg-slate-200 text-slate-500'
                iconBtn={<PushPinOutlinedIcon sx={{fontSize: '20px'}} />}
              />
            </div>
          </div>
          
          <div>
            <div className='py-4 text-xs text-gray-400'>
              <ForumOutlinedIcon sx={{fontSize: '15px'}} />
              <span className='ml-1 uppercase'>129 preguntas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDiscussionsPanel