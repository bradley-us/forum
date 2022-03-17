import './style.css'

const WallpaperControlPage = ({children} : {children: any}) => {
  return (
    <div className='relative hidden lg:block img__control__page'>
        {children}
    </div>
  )
}

export default WallpaperControlPage