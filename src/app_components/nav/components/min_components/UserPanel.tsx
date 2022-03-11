import userPhoto from '../../../../assets/avatar-user.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UserPanel = () => {
  return (
    <div className='flex flex-row items-center gap-2 rounded-full bg-slate-100'>
        <div className='w-10'>
            <img className='rounded-full' src={userPhoto} alt='Profile' />
        </div>
        <div className='pr-3 text-slate-500'>
            UserName  <KeyboardArrowDownIcon sx={{ color: 'gray' }}></KeyboardArrowDownIcon>
        </div>
    </div>
  )
}

export default UserPanel