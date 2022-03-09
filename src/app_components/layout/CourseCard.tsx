import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CourseCardBanner = () => {
  return (
    <div className='h-28 bg-slate-200 flex flex-row justify-center items-center'>
      <div className='flex flex-row justify-around items-center w-full'>
        <span>
          ICON
        </span>

        <span>
          General
        </span>
      </div>
    </div>
  )
}

export default function CourseCard() {
  return (
    <Card sx={{ maxWidth: 255, borderRadius: 4 }}>
      <CourseCardBanner />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}