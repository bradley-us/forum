import InputAdornments from "./min_components/FormInput"

const ControlBoxLogin = ({children} : {children: any}) : JSX.Element => {
  return (
    <div className='fixed lg:max-w-[400px] z-10 text-white bg-slate-900 h-screen w-full'>
        <div className='relative flex flex-col w-full items-center justify-center h-screen'>
          <div className='flex flex-col justify-center items-center w-full p-5 max-w-[340px] w-full'>
            {children}
          </div>
          <div className='absolute bottom-10'>
            <div className='flex flex-col items-center justify-center text-xs text-slate-300'>
              <p>Copyright © 2022 Bradley Ramirez</p>
              <p>Todos los derechos reservados.</p>
              <p>Política de Privacidad</p>
            </div>
          </div>
        </div>
    </div>
        
  )
}

export default ControlBoxLogin