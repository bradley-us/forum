const ContainerPagesX = ({children} : {children: any}) => {
  return (
    <div className='w-full mt-7'>
      <div className='w-11/12 max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-gray-300'>
        {children}
      </div>
    </div>
  )
}

export default ContainerPagesX