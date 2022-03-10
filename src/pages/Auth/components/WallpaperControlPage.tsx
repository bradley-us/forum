import './style.css'

const WallpaperControlPage = ({children} : {children: any}) => {
  return (
    <div className='hidden lg:block img__control__page relative'>
        {children}
    </div>
  )
}

export default WallpaperControlPage