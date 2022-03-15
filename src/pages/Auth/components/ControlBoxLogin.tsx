import InputAdornments from "./min_components/FormInput"

const ControlBoxLogin = ({children} : {children: any}) : JSX.Element => {
  return (
    <div className='overflow-auto fixed lg:max-w-[400px] z-10 text-white bg-slate-900 lg:h-screen h-full w-full'>
        <div className='relative flex flex-col w-full items-center justify-center lg:h-screen'>
          <div className='flex flex-col justify-center items-center w-full p-5 max-w-[340px] w-full'>
            {children}
          </div>
          <div>
            <div className='flex flex-col items-center justify-center text-xs text-slate-300 pb-10'>
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