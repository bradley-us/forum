import SearchIcon from '@mui/icons-material/Search';

const SearchNav = () : JSX.Element => {
  return (
    <div>
        <label
            className='dark:bg-slate-800 dark:border-slate-600 bg-slate-100 appearance-none border border-slate-300 rounded-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-sky-200'
            htmlFor='search'>
            <SearchIcon sx={{color: '#ccc'}}></SearchIcon>
            <input
                className='w-24 ml-3 text-sm font-bold text-gray-700 dark:bg-slate-800 dark:border-slate-600 bg-slate-100 focus:outline-none'
                type='text'
                placeholder='Buscar'
                name='search'
            />
        </label>
        
    </div>
  )
}

export default SearchNav