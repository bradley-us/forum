import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

interface CourseCardBannerProps {
  background?: string,
  circleBg?: string,
  iconColor?: string,
  titleCard?: string,
  numberModule?: any,
  bodyText?: string,
  questions?: number
}

const CourseCardBanner = ( props : CourseCardBannerProps ) => {
  const {background, circleBg, iconColor, titleCard, numberModule } = props
  
  return (
    <div style={{backgroundColor: background}} className='flex flex-row items-center justify-center text-white h-28'>
      <div className='flex flex-row items-center justify-center w-full'>
        <div
          style={{backgroundColor: circleBg, color: iconColor}}
          className='mr-5 text-[24px] leading-10 rounded-full inline-block font-bold text-center w-[40px]'
        >
          {numberModule}
        </div>

        <span className='text-xl'>
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
  const {background, circleBg, iconColor, titleCard, numberModule, bodyText, questions} = props

  return (
    <Card sx={{ minWidth: 255, maxWidth: 255, borderRadius: 4 }}>
      <CardActionArea>
        <CourseCardBanner
          iconColor={iconColor}
          background={background}
          circleBg={circleBg}
          titleCard={titleCard}
          numberModule={numberModule}
        />

        <CardContent>
          <Typography sx={{height: 60, fontWeight: 'bold'}} variant="body1" color="text.primary">
            {bodyText}
          </Typography>
        </CardContent>
        <CardActions>
        <CourseCardFooter questions={questions} />
      </CardActions>
      </CardActionArea>
    </Card>
  );
}