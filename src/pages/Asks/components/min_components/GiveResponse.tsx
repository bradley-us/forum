import { useState } from 'react';
import Avatar from '../../../../assets/avatar-user.jpg'
import ButtonX from '../../../../app_components/layout/min_components/ButtonX'
import SlateEditor from '../../../../app_components/layout/markdown/SlateEditor'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'

import './style.css'
import MarkdownPreview from '../../../../app_components/layout/markdown/Preview';

const GiveResponse = () => {

  const [textProvider, setTextProvider] = useState(false)
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlerTextProvider = () => {
    setTextProvider(!textProvider)
  }

  const stylesForSelectedTab = {
    borderRadius: '10px',
    border: '1px solid #ccc',
    bgcolor: 'white',
    minHeight: 0,
    p: '10px 10px',
    fontWeight: 'bold',
    color: '#444 !important'
  }

  return (
    <div className='border-b last:border-none'>
      <div className='w-full px-5 mx-auto'>
        <div className={`flex flex-row ${textProvider? 'items-start':'items-center'} justify-center gap-5 py-5`}>
          <figure className='w-9'>
            <img className='rounded-full' src={Avatar} alt='Profile pic' />
          </figure>

          <div className='flex flex-col w-full gap-2 text-sm'>
            {
              textProvider ?
              (
                <div className='flex flex-col items-start justify-start gap-3'>
                  <TabContext value={value}>
                    <SlateEditor
                      displayToggleToolbar={value === '2' ? '!hidden' : 'block'}
                      classNameToolbar={`justify-between`}
                    >
                      <Box sx={{ width: 'auto'}}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab 
                              sx={value === '1' ? stylesForSelectedTab : {textTransform: 'capitalize', minHeight: 0, p: '0 10px', fontWeight: 'bold'}}
                              label='Escribir' value="1" />
                            <Tab
                              sx={value === '2' ? stylesForSelectedTab : {textTransform: 'capitalize', minHeight: 0, p: '0 10px', fontWeight: 'bold'}}
                              label="Previsualizar" value="2"
                            />
                          </TabList>
                      </Box>
                    </SlateEditor>
                  </TabContext>
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <ButtonX
                      onClick={() => setTextProvider(!textProvider)}
                      classNameBox='font-bold border border-slate-200'
                    >
                      Cancelar
                    </ButtonX>
                    <ButtonX
                    classNameBox='bg-emerald-500 text-white'
                    >
                      Subir pregunta
                    </ButtonX>
                  </div>
                  
                </div>
                
              )
              :
              (
                <div onClick={handlerTextProvider} className='w-full px-3 py-2 border rounded-lg  dark:bg-slate-800 dark:border-slate-600 cursor-text text-slate-400 bg-slate-100 border-slate-200'>
                  Escribe una respuesta
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveResponse