import * as React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AngularIcon from '../../assets/cursos_logos/angularjs-original.svg';


import SelectForumPanel from './min_components/SelectForumPanel';
import SearchForumPanel from './min_components/SearchForumPanel';

const DivBanner = () : JSX.Element => {
  return(
    <div style={{height: '70px', backgroundColor: '#DD1B16'}}>
    </div>
  )
}


const CourseIcon = () : JSX.Element => {
  return (
      <div style={{position: 'absolute', bottom: 0}} className='w-20 bg-white border-4 border-slate-200 rounded-xl p-2'>
        <img src={AngularIcon} alt='Angular Favicon' />
      </div>
  )
}

const SearchNav = () : JSX.Element => {
  return (
    <div style={{borderTop: '2px solid #e8e8e8' }} className='w-full pt-6 grid gap-4 grid-cols-1 md:grid-cols-[1fr_0.4fr]'>
      <SearchForumPanel />

      <SelectForumPanel />
    </div>
  )
}

const FollowBtn = () : JSX.Element => {
  return (
      <div className='flex flex-row-reverse w-full'>
        <div onClick={() => console.log('Following?')} className='py-5 px-4 flex flex-row items-center justify-center bg-green-100 rounded-lg'>
          <PersonOutlineIcon color='success'></PersonOutlineIcon>
          <span style={{fontWeight: 'bold', paddingLeft: 10, color: '#3cb371'}}>Siguiendo</span>
        </div>
      </div>
  )
}

export default function CourseBannerCard() {
  return (
    <Card sx={{ width: '100%', background: '#DD1B16', borderRadius: 4 }}>
        <CardMedia
          component={DivBanner}
        />
        <CardContent className='bg-[#fff]' sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', position: 'relative', display: 'flex', flexDirection: 'flex-row', justifyContent: 'flex-start', width: '100%', height: '50px', paddingBottom: 5}}>
          <CourseIcon />
          <Typography sx={{marginLeft: '100px', fontWeight: 'bold', fontSize: '1.4em'}} gutterBottom variant="h5" component="div">
            Angular
          </Typography>
          
          <FollowBtn />
        </CardContent>
      <CardActions className='bg-[#fff]' sx={{ padding: '20px' }}>
        <SearchNav />
      </CardActions>
    </Card>
  );
}