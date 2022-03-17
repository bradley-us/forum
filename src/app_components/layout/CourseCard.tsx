import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

interface CourseCardBannerProps {
  bgcolor?: string,
  circleBg?: string,
  iconColor?: string,
  titleCard?: string,
  numberModule?: any,
  bodyText?: string,
  questions?: number,
  defaultCard?: boolean
}

const CourseCardBanner = ( props : CourseCardBannerProps ) => {
  const {bgcolor, circleBg, iconColor, titleCard, numberModule, defaultCard } = props
  
  return (
    <div
      style={{backgroundColor: `#${bgcolor}`}}
      className={`flex flex-row items-center justify-center text-white h-28`}
    >
      <div className='flex flex-row items-center justify-center w-full'>
        <div
          style={{background: `#${circleBg}`, color: `#${iconColor}`}}
          className={`mr-5 text-[24px] leading-10 rounded-full inline-block font-bold text-center w-[40px]`}
        >
          {numberModule}
        </div>

        <span className='text-xl dark:text-slate-200'>
          <strong>{titleCard}</strong>
        </span>
      </div>
    </div>
  )
}

const CourseCardFooter = ({questions} : CourseCardBannerProps) => {
  return (
    <>
      <div className='flex flex-row items-center justify-start w-full p-2'>
        <ForumOutlinedIcon sx={{ color: '#ccc'}} />
        <span className='ml-2 text-sm text-gray-300'><strong>{questions} preguntas</strong></span>
      </div>
    </>
  )
}

export default function CourseCard( props : CourseCardBannerProps ) {
  const {bgcolor, circleBg, iconColor, titleCard, numberModule, bodyText, questions, defaultCard} = props

  return (
    <Card className='border border-slate-200 dark:border-slate-600 min-w-[245px] max-w-[245px] !rounded-xl'>
      <CardActionArea>
        <CourseCardBanner
          iconColor={iconColor}
          bgcolor={bgcolor}
          circleBg={circleBg}
          titleCard={titleCard}
          numberModule={numberModule}
          defaultCard={defaultCard}
        />

      <div className='dark:bg-slate-800 dark:text-gray-300'>
        <CardContent>
          <Typography sx={{height: 60, fontWeight: 'bold'}} variant="body1">
            {bodyText}
          </Typography>
        </CardContent>

        <CardActions>
          <CourseCardFooter questions={questions} />
        </CardActions>
      </div>
      </CardActionArea>
    </Card>
  );
}