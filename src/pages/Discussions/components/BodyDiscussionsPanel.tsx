import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const BodyDiscussionsPanel = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const stylesForTableTitle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    // color: 'black !important',
  }

  return (
    <>
      <div className='w-full mt-7'>
        <div className='w-11/12 max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-white'>
          <div className='px-3 py-4 border-b'>
            <h3 className='text-sm font-bold'>Discursiones fijadas</h3>
          </div>

          <div>
            <div>
              <div className='container__bodyDiscussions'>
                <div className='py-2 border-b'></div>

                <div className='py-2 border-b'></div>

                <div className='py-2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-7'>
        <div className='w-11/12 max-w-[1280px] rounded-lg mx-auto bg-white dark:bg-slate-800 dark:text-white'>
            <TabContext value={value}>
              <div className='w-[97%] mx-auto border-b'>
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
                <div className='py-3 border-b'>hola</div>
                <div className='py-3 border-b'>hola</div>
                <div className='py-3'>hola</div>
              </TabPanel>
              <TabPanel sx={{padding: 0}} value="2">Item Two</TabPanel>
            </TabContext>
        </div>
      </div>
    </>
  )
}

export default BodyDiscussionsPanel