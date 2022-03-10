import { useState } from 'react'
import CourseCard from './CourseCard'
import CommentIcon from '@mui/icons-material/Comment';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const cardGeneral = {
    id: <CommentIcon />,
    title: 'General',
    body: 'Dudas general',
    questions: 231,
    background: '#15803d',
    circleBgColor: '#166534',
    iconColor: '#4ade80'
}

const cardError = {
    id: <ReportGmailerrorredIcon />,
    title: 'Errores',
    body: 'Errores',
    questions: 23,
    background: '#ef4444',
    circleBgColor: '#b91c1c',
    iconColor: '#fca5a5'
}

const cardProjects = {
    id: <AccountTreeIcon />,
    title: 'Proyectos',
    body: 'Proyectos',
    questions: 12,
    background: '#0ea5e9',
    circleBgColor: '#0c4a6e',
    iconColor: '#06b6d4'
}

const card_1 = {
    id: 1,
    title: 'Módulo 1',
    body: 'LPD kdfmkos aKSdos pjapdmap asmdkasmkd',
    questions: 652,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_2 = {
    id: 2,
    title: 'Módulo 2',
    body: 'kldfkl skmfk spsf po spofkposdpk',
    questions: 42,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_3 = {
    id: 3,
    title: 'Módulo 3',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 231,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_4 = {
    id: 4,
    title: 'Módulo 4',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 2222,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_5 = {
    id: 5,
    title: 'Módulo 5',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 2311,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_6 = {
    id: 6,
    title: 'Módulo 6',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 61,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_7 = {
    id: 7,
    title: 'Módulo 7',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 39,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const card_8 = {
    id: 8,
    title: 'Módulo 8',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 92,
    background: '#1e293b',
    circleBgColor: '#dcfce7',
    iconColor: '#22c55e'
}

const CourseCardGroup = () => {

    const cardsList = [
        cardGeneral,
        cardError,
        cardProjects,
        card_1,
        card_2,
        card_3,
        card_4,
        card_5,
        card_6,
        card_7,
        card_8
    ]

    const [cards, setCards] = useState(cardsList)

  return (
    <>
        {
            cards.map((card) => {
                return <CourseCard
                            circleBg={card.circleBgColor}
                            iconColor={card.iconColor}
                            numberModule={card.id}
                            titleCard={card.title}
                            bodyText={card.body}
                            questions={card.questions}
                            background={card.background}
                        />
            })
        }
    </>
    
  )
}

export default CourseCardGroup