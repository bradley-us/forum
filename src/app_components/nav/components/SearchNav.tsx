import SearchIcon from '@mui/icons-material/Search';

const SearchNav = () : JSX.Element => {
  return (
    <div>
        <label
            className='bg-slate-200 appearance-none border border-slate-300 rounded-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-sky-200'
            htmlFor='search'>
            <SearchIcon sx={{color: '#ccc'}}></SearchIcon>
            <input
                className='font-bold text-gray-700 bg-slate-200 text-sm ml-3 focus:outline-none w-24'
                type='text'
                placeholder='Buscar'
                name='search'
            />
        </label>
        
    </div>
  )
}

export default SearchNav