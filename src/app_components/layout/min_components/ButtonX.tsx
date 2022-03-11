const ButtonX = (
  {children, iconBtn, xstylesText, xstylesBox, classNameBox, classNameText, onClick}
  :
  {children?: any, iconBtn?: any, xstylesText?: any, xstylesBox?: any, classNameBox?: string, classNameText?: string, onClick?: any}) : JSX.Element => {


  return (
    <div style={xstylesBox} onClick={onClick} className={`${classNameBox} flex flex-row items-center justify-center px-4 py-2 rounded-lg cursor-pointer ${ iconBtn && children !== undefined ? 'gap-1' : null}`}>
      {iconBtn}
      <span
        className={`${classNameText}`}
        style={xstylesText}
      >
        {children}    
      </span>
    </div>
  )
}

export default ButtonX