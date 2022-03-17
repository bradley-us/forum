import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AccordionDetailsBox from './AccordionDetailsBox';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// *** ICONS imports ***
import AngularIcon from '../../../assets/cursos_logos/angularjs-original.svg'
import ReactIcon from '../../../assets/cursos_logos/react-original.svg'
import SpringIcon from '../../../assets/cursos_logos/spring-original.svg'
import JSIcon from '../../../assets/cursos_logos/javascript-original.svg'
import GitIcon from '../../../assets/cursos_logos/git-original.svg'
import AzureIcon from '../../../assets/cursos_logos/azure-original.svg'

export default function AccordionNav() {

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        sx={{bgcolor: '#f4f4f4'}}
        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        className='!shadow-none !border-none dark:bg-slate-800 dark:text-slate-300'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='dark:text-slate-300 text-slate-500' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='!font-bold text-slate-500'>Cursos</Typography>
        </AccordionSummary>
        <AccordionDetails className='!rounded-b-lg dark:bg-slate-700'>
          <AccordionDetailsBox selected={`bg-slate-200 dark:bg-slate-800 dark:text-gray-50`} svgCourse={AngularIcon}>Angular</AccordionDetailsBox>
          <AccordionDetailsBox svgCourse={ReactIcon}>React JS</AccordionDetailsBox>
          <AccordionDetailsBox svgCourse={SpringIcon}>Spring</AccordionDetailsBox>
          <AccordionDetailsBox svgCourse={JSIcon}>JavaScript</AccordionDetailsBox>
          <AccordionDetailsBox svgCourse={GitIcon}>Git</AccordionDetailsBox>
          <AccordionDetailsBox svgCourse={AzureIcon}>Azure</AccordionDetailsBox>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}