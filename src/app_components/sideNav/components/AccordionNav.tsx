import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccordionDetailsBox from './AccordionDetailsBox';

// *** ICONS imports ***
import AngularIcon from '../../../assets/cursos_logos/angularjs-original.svg'
import ReactIcon from '../../../assets/cursos_logos/react-original.svg'
import SpringIcon from '../../../assets/cursos_logos/spring-original.svg'
import JSIcon from '../../../assets/cursos_logos/javascript-original.svg'
import GitIcon from '../../../assets/cursos_logos/git-original.svg'
import AzureIcon from '../../../assets/cursos_logos/azure-original.svg'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#f4f4f4',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f4f4f4'
}));

export default function AccordionNav() {
  const [expanded, setExpanded] = React.useState<string | false>('panel2');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  
  const courseSelectedStyles = {
    backgroundColor: '#e1e1e1'
  }

  return (
    <div>
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AccordionDetailsBox>Angular</AccordionDetailsBox>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Cursos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetailsBox selected={courseSelectedStyles} svgCourse={AngularIcon}>Angular</AccordionDetailsBox>
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