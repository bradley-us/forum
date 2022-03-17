import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AngularIcon from '../../assets/cursos_logos/angularjs-original.svg';

import SelectForumPanel from './min_components/SelectForumPanel';
import SearchForumPanel from './min_components/SearchForumPanel';
import ButtonX from './min_components/ButtonX';

const DivBanner = () : JSX.Element => {
  return(
    <div className='dark:bg-slate-700 h-[70px] bg-[##DD1B16]'>
    </div>
  )
}


const CourseIcon = () : JSX.Element => {
  return (
      <div style={{position: 'absolute', bottom: 0}} className='w-20 p-2 bg-white border-4 dark:bg-slate-800 dark:border-slate-600 border-slate-200 rounded-xl'>
        <img src={AngularIcon} alt='Angular Favicon' />
      </div>
  )
}

const SearchNav = () : JSX.Element => {
  return (
    <div className='border-t-2 border-slate-200 dark:border-slate-600 w-full pt-6 grid gap-4 grid-cols-1 md:grid-cols-[1fr_0.4fr]'>
      <SearchForumPanel />

      <SelectForumPanel />
    </div>
  )
}

export default function CourseBannerCard() : JSX.Element {
  return (
    <Card className='dark:bg-slate-700' sx={{ width: '100%', background: '#DD1B16', borderRadius: 4 }}>
        <CardMedia
          component={DivBanner}
        />
        <CardContent className='relative flex flex-row justify-between h-0 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-t-2xl' sx={{paddingBottom: 5}}>
          <CourseIcon />
          <Typography sx={{marginLeft: '100px', fontWeight: 'bold', fontSize: '1.4em'}} gutterBottom variant="h5" component="div">
            Angular
          </Typography>
          
          <ButtonX
            classNameBox='bg-green-100 !py-5 text-green-500 right-0'
            iconBtn={<PersonOutlineIcon />}
          >
            Siguiendo
          </ButtonX>
        </CardContent>
      <CardActions className='bg-white dark:bg-slate-800 dark:text-gray-300' sx={{ padding: '20px' }}>
        <SearchNav />
      </CardActions>
    </Card>
  );
}