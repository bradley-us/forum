import { useState } from 'react'
import CourseCard from './CourseCard'

const cardGeneral = {
    id: -2,
    title: 'General',
    body: 'Dudas general',
    questions: 231,
    bg: '32D4A4',
    circleBgColor: '23ADA5',
    iconColor: '4ade80',
    defaultCard: true
}

const cardError = {
    id: -1,
    title: 'Errores',
    body: 'Errores',
    questions: 23,
    bg: 'EC555E',
    circleBgColor: 'B21E50',
    iconColor: 'fca5a5',
    defaultCard: true
}

const cardProjects = {
    id: 0,
    title: 'Proyectos',
    body: 'Proyectos',
    questions: 12,
    bg: '2834BA',
    circleBgColor: '1B2382',
    iconColor: '06b6d4',
    defaultCard: true
}

const card_1 = {
    id: 1,
    title: 'Módulo 1',
    body: 'LPD kdfmkos aKSdos pjapdmap asmdkasmkd',
    questions: 652,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_2 = {
    id: 2,
    title: 'Módulo 2',
    body: 'kldfkl skmfk spsf po spofkposdpk',
    questions: 42,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_3 = {
    id: 3,
    title: 'Módulo 3',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 231,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_4 = {
    id: 4,
    title: 'Módulo 4',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 2222,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_5 = {
    id: 5,
    title: 'Módulo 5',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 2311,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_6 = {
    id: 6,
    title: 'Módulo 6',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 61,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
}

const card_7 = {
    id: 7,
    title: 'Módulo 7',
    body: 'kfkl psmfññad ñamd añv vpo fpfmapmf apkmf',
    questions: 39,
    bg: '040F36',
    circleBgColor: '239483',
    iconColor: '28EDB2',
    defaultCard: false
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
    ]
    
    const [cards, setCards] = useState(cardsList)

  return (
    <>
      {
        cards.map((card, key) => {
            return <CourseCard
                    key={key}
                    numberModule={card.id}
                    titleCard={card.title}
                    bodyText={card.body}
                    questions={card.questions}
                    bgcolor={card.bg}
                    circleBg={card.circleBgColor}
                    iconColor={card.iconColor}
                    defaultCard={card.defaultCard}
                  />
        })
      }
    </>
    
  )
}

export default CourseCardGroup