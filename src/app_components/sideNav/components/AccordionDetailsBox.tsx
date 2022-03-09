import AngularIcon from '../../../assets/cursos_logos/angularjs-original.svg'

const AccordionDetailsCourseSVG = ({svgCourse} : {svgCourse: string}) => {
  return (
    <div className='w-5'>
      <img src={svgCourse} alt='Angular Icon' />
    </div>
  )
}

const AccordionDetailsCourseTitle = ({children} : {children: string}) => {
  return (
    <span className='font-bold text-slate-500 ml-2'>{children}</span>
  )
}

const AccordionDetailsBox = ({children, svgCourse, selected} : {children: string, svgCourse: string, selected?: object}) => {
  return (
    <div style={selected} className='py-2 rounded-lg px-2 cursor-pointer mb-1'>
        <div className=' flex flex-row justify-start items-center'>
            <AccordionDetailsCourseSVG svgCourse={svgCourse} />

            <AccordionDetailsCourseTitle children={children}></AccordionDetailsCourseTitle>
        </div>
    </div>
  )
}

export default AccordionDetailsBox