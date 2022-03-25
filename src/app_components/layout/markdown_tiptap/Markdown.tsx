import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import * as Btn from './ButtonsStyles'
import './style.scss'

import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const onBtnStyles = {backgroundColor: '#e2e8f0', '&hover': {backgroundColor: '#cbd5e1'}}
  const offBtnStyles = `!text-slate-400`

  const headingsPassProps = [
    {
      id: 1,
      subTitle: 'Título 1',
      onclick:  () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      styles: () => editor.isActive('heading', { level: 1 }) ? onBtnStyles : offBtnStyles
    },
    {
      id: 2,
      subTitle: 'Título 2',
      onclick:  () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      styles: () => editor.isActive('heading', { level: 2 }) ? onBtnStyles : offBtnStyles
    },
    {
      id: 3,
      subTitle: 'Título 3',
      onclick:  () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      styles: () => editor.isActive('heading', { level: 3 }) ? onBtnStyles : offBtnStyles
    }
  ]


  return (
    <div className='flex flex-row flex-wrap items-center justify-start rounded-t-lg'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.BoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.ItalyIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${editor.isActive('underline') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.UnderlinedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${editor.isActive('strike') ? onBtnStyles : offBtnStyles}`}
        >
        <Btn.StrikeTextIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${editor.isActive('code') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.CodedIcon />
      </button>

      <Btn.MenuOptions
        menuSubOptionsProps={headingsPassProps}
        menuTitleProp={`Titles`}
      />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive('bulletList') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.ListIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${editor.isActive('orderedList') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.ListNoIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${editor.isActive('codeBlock') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.CodeBlockIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${editor.isActive('blockquote') ? onBtnStyles : offBtnStyles}`}
      >
        <Btn.QuoteIcon />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <Btn.UnDoIcon />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <Btn.ReDoIcon />
      </button>
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button> */}
      {/* <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${editor.isActive('paragraph') ? onBtnStyles : offBtnStyles}`}
      >
        paragraph
      </button> */}
      {/* <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button> */}
      {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}
    </div>
  )
}

const Markdown = ({classNameToolbar, children} : {classNameToolbar?: any, children?: any}) => {
  const [editable, setEditable] = useState(true)
  const [value, setValue] = useState('1');

  const editor = useEditor({
    editable,
    editorProps: {
      attributes: {
        class: '!w-full p-2 bg-slate-100 rounded-md dark:bg-slate-700'
      }
    },
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: 'Escribe ...',
      }),
    ],
  })

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  };

  const stylesForSelectedTab = {
    
    borderRadius: '10px',
    border: '1px solid #ccc',
    bgcolor: (localStorage.getItem('theme') === 'dark') ? '#0f172a' : '',
    minHeight: 0,
    fontSize: '12px',
    p: '8px 8px',
    fontWeight: 'black',
    color: (localStorage.getItem('theme') === 'dark') ? '#cbd5e1 !important' : '#1e293b !important',
    textTransform: 'none'
  }

  const stylesForNotSelectedTab = {
    color: (localStorage.getItem('theme') === 'dark') ? '#cbd5e1 !important' : '#1e293b !important',
    fontSize: '12px',
    textTransform: 'none',
    minHeight: 0,
    p: '0 10px',
    fontWeight: 'bold'
  }

  return (
    <TabContext value={value}>
      <div className='flex flex-col w-full border rounded-lg border-slate-200'>
        <div className={`${classNameToolbar} dark:bg-slate-800 w-full mx-auto flex rounded-t-lg flex-col sm:flex-row bg-slate-100 px-2`}>
          {children}
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab 
                sx={value === '1' ? stylesForSelectedTab : stylesForNotSelectedTab}
                label='Escribir' value="1"
              />
              <Tab
                sx={value === '2' ? stylesForSelectedTab : stylesForNotSelectedTab}
                label="Previsualizar" value="2"
              />
            </TabList>
          <MenuBar editor={editor} />
        </div>
        <TabPanel className='!p-2' value="1">
          <EditorContent editor={editor} />
        </TabPanel>
        
        <TabPanel className='!p-2' value="2">
          <EditorContent editor={editor} />
        </TabPanel>
      </div>
    </TabContext>

  )
}

export default Markdown