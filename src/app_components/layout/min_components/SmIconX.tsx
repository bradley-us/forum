const SmIconX = ({children, className}:any) : JSX.Element => {
  return (
    <div className={`${className} flex flex-row justify-center items-center p-1`}>
      {children}
    </div>
  )
}

export default SmIconX