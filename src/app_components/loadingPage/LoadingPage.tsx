import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = () => {

  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-slate-300'>
      <CircularProgress color='inherit' size={60} />
    </div>
  )
}

export default LoadingPage