import SelectForumPanel from '../../../../app_components/layout/min_components/SelectForumPanel'

const MenuHeaderResponses = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full px-3 py-3 dark:text-gray-300'>
      <div className='text-sm font-bold'>
        4 respuestas
      </div>

      <div>
        <SelectForumPanel />
      </div>
    </div>
  )
}

export default MenuHeaderResponses