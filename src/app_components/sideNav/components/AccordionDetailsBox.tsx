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
    <span className='ml-2'>{children}</span>
  )
}

const AccordionDetailsBox = ({children, svgCourse, selected} : {children: string, svgCourse: string, selected?: string}) => {
  return (
    <div className={`${selected} font-bold text-slate-400 py-2 rounded-lg px-2 cursor-pointer`}>
        <div className='flex flex-row items-center justify-start'>
            <AccordionDetailsCourseSVG svgCourse={svgCourse} />

            <AccordionDetailsCourseTitle children={children}></AccordionDetailsCourseTitle>
        </div>
    </div>
  )
}

export default AccordionDetailsBox