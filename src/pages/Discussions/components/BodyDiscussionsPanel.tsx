import * as React from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import DiscussionInputs from './min_components/DiscussionInputs'

// ASSETS
import avatar2 from '../../../assets/avatars/avatar2.jpg'
import avatar3 from '../../../assets/avatars/avatar3.jpg'
import avatar4 from '../../../assets/avatars/avatar4.jpg'

const BodyDiscussionsPanel = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const stylesForTableTitle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#999 !important',
  }

  const AvatarsGroup = [
    {linkImg: avatar2},
    {linkImg: avatar3},
    {linkImg: avatar4}
  ]

  const AvatarsGroup2 = [
    {linkImg: avatar2},
    {linkImg: avatar4},
  ]

  return (
    <>
      <div className='w-full mt-7'>
        <div className='w-11/12 max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-gray-300'>
          <div className='px-3 py-4 border-b dark:border-slate-600'>
            <h3 className='text-sm font-bold'>Discursiones fijadas</h3>
          </div>

          <div>
            <div>
              <div>
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup}
                  isPinnedBySuperUsers={true}
                  likesCounter={31}
                  noOfAnswers={21}
                  noOfDays={31}
                  publishedBy={`Dray`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup}
                  isPinnedBySuperUsers={true}
                  likesCounter={433}
                  noOfAnswers={2}
                  noOfDays={10}
                  publishedBy={`Bradley`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup2}
                  isPinnedBySuperUsers={true}
                  likesCounter={144}
                  noOfAnswers={32}
                  noOfDays={1}
                  publishedBy={`Patrick`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-7'>
        <div className='w-11/12 max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-gray-300'>
            <TabContext value={value}>
              <div className='w-[97%] mx-auto'>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab
                    sx={stylesForTableTitle}
                    label="En tendencia"
                    value="1"
                  />
                  <Tab
                    sx={stylesForTableTitle}
                    label="Más recientes"
                    value="2"
                  />
                </TabList>
              </div>
              
              <TabPanel sx={{padding: 0}} value="1">
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup}
                  isPinnedBySuperUsers={false}
                  likesCounter={122}
                  noOfAnswers={2}
                  noOfDays={10}
                  publishedBy={`Bradley`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup}
                  isPinnedBySuperUsers={false}
                  likesCounter={122}
                  noOfAnswers={2}
                  noOfDays={10}
                  publishedBy={`Bradley`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
                <DiscussionInputs
                  avatarsGroup={AvatarsGroup}
                  isPinnedBySuperUsers={false}
                  likesCounter={122}
                  noOfAnswers={2}
                  noOfDays={10}
                  publishedBy={`Bradley`}
                  questionText={
                    `El contenido del curso se ha actualizado una vez he superado el curso
                    ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                  }
                />
              </TabPanel>
              <TabPanel sx={{padding: 0}} value="2">
                <DiscussionInputs
                    avatarsGroup={AvatarsGroup}
                    isPinnedBySuperUsers={false}
                    likesCounter={122}
                    noOfAnswers={2}
                    noOfDays={10}
                    publishedBy={`Bradley`}
                    questionText={
                      `El contenido del curso se ha actualizado una vez he superado el curso
                      ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                    }
                  />
                  <DiscussionInputs
                    avatarsGroup={AvatarsGroup}
                    isPinnedBySuperUsers={false}
                    likesCounter={122}
                    noOfAnswers={2}
                    noOfDays={10}
                    publishedBy={`Bradley`}
                    questionText={
                      `El contenido del curso se ha actualizado una vez he superado el curso
                      ¿Qué puedo hacer, continuo la formación o la dejo como está?`
                    }
                  />
              </TabPanel>
            </TabContext>
        </div>
      </div>
    </>
  )
}

export default BodyDiscussionsPanel