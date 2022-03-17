import Header from '../../../app_components/nav/Header'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HeaderQuestion from './HeaderQuestion';

const QuestionPanel = () => {

  const displayNone = {
    display: 'none'
  }

  return (
    <div>
      <Header logoVisibility={displayNone} bgColor={`bg-[#fff]`}>
        <div>
          <div
            className='flex flex-row items-center justify-center gap-1 px-3 py-2 text-sm font-bold text-gray-600 rounded-lg cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-300 bg-slate-200'
          >
            <span><KeyboardBackspaceIcon sx={{fontSize: '16px'}} /></span> Volver
          </div>
        </div>
      </Header>

      <HeaderQuestion />      
    </div>
  )
}

export default QuestionPanel