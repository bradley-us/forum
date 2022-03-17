const ControlBoxLogin = ({children} : {children: any}) : JSX.Element => {
  return (
    <div className='overflow-auto fixed lg:max-w-[400px] z-10 text-white bg-slate-900 lg:h-screen h-full w-full'>
        <div className='relative flex flex-col items-center justify-between w-full gap-5 lg:h-screen'>
          <div className='py-20'>
            {children}
          </div>
          <div className='flex flex-col items-center justify-center pb-10 text-xs text-slate-300'>
            <p>Copyright © 2022 Bradley Ramirez</p>
            <p>Todos los derechos reservados.</p>
            <p>Política de Privacidad</p>
          </div>
        </div>
    </div>
        
  )
}

export default ControlBoxLogin