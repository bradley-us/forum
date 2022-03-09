import userPhoto from '../../../assets/avatar-user.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UserPanel = () => {
  return (
    <div className='rounded-full flex flex-row gap-2 bg-white items-center'>
        <div className='w-10'>
            <img className='rounded-full' src={userPhoto} alt='Profile' />
        </div>
        <div className='text-slate-500 pr-3'>
            UserName  <KeyboardArrowDownIcon sx={{ color: 'gray' }}></KeyboardArrowDownIcon>
        </div>
    </div>
  )
}

export default UserPanel