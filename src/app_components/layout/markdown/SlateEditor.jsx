import { useCallback, useMemo, useState, useEffect } from 'react'
// import Prism from 'prismjs'

import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
  Text,
} from 'slate'
import { withHistory } from 'slate-history'

import * as Btn from './ButtonsStyles'

import { Button, Icon, Toolbar } from './Components'

import './styles.css'

import TabPanel from '@mui/lab/TabPanel'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export function getEditorText(value) {
  return [value]
}

const SlateEditor = ({classNameToolbar = 'justify-start', displayToggleToolbar = null, children = null}) => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  useEffect(() => {
    getEditorText(value)
  }, [value]);

  // const decorate = useCallback(([node, path]) => {
  //   const ranges = []

  //   if (!Text.isText(node)) {
  //     return ranges
  //   }

  //   const getLength = token => {
  //     if (typeof token === 'string') {
  //       return token.length
  //     } else if (typeof token.content === 'string') {
  //       return token.content.length
  //     } else {
  //       return token.content.reduce((l, t) => l + getLength(t), 0)
  //     }
  //   }

  //   const tokens = Prism.tokenize(node.text, Prism.languages.markdown)
  //   let start = 0

  //   for (const token of tokens) {
  //     const length = getLength(token)
  //     const end = start + length

  //     if (typeof token !== 'string') {
  //       ranges.push({
  //         [token.type]: true,
  //         anchor: { path, offset: start },
  //         focus: { path, offset: end },
  //       })
  //     }

  //     start = end
  //   }

  //   return ranges
  // }, [])

  return (
    <div className='w-full border rounded-lg dark:border-slate-600 border-slate-100'>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <div className={`${classNameToolbar} dark:bg-slate-800 w-full mx-auto flex rounded-t-lg flex-row bg-slate-100 px-1`}>
        {children}
        <div className={`${displayToggleToolbar}`}>
        <Toolbar className='rounded-t-lg !border-none flex flex-row justify-start items-center flex-wrap'>
        <MarkButton format="bold" icon={<Btn.BoldIcon/>} />
        <MarkButton format="italic" icon={<Btn.ItalyIcon/>} />
        <MarkButton format="underline" icon={<Btn.UnderlinedIcon/>} />
        <MarkButton format="code" icon={<Btn.CodedIcon/>} />
        <BlockButton format="heading-one" icon={<Btn.HeadOneIcon/>} />
        <BlockButton format="heading-two" icon={<Btn.HeadTwoIcon/>} />
        <BlockButton format="block-quote" icon={<Btn.QuoteIcon/>} />
        <BlockButton format="numbered-list" icon={<Btn.ListNoIcon/>} />
        <BlockButton format="bulleted-list" icon={<Btn.ListIcon/>} />
        <BlockButton format="left" icon={<Btn.TextLeftIcon/>} />
        <BlockButton format="center" icon={<Btn.TextCenterIcon/>} />
        <BlockButton format="right" icon={<Btn.TextRightIcon/>} />
        <BlockButton format="justify" icon={<Btn.TextJustifyIcon/>} />
      </Toolbar>
      </div>
      </div>
      <TabPanel className='!p-1' value="1">
        <Editable
          className='!w-full p-2 bg-slate-100 rounded-md dark:bg-slate-700'
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder='Escribe...'
          spellCheck
          autoFocus
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </TabPanel>
    </Slate>
    
    <TabPanel className='!p-1' value="2">
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable
          // decorate={decorate}
          readOnly
          className='p-2'
          renderLeaf={renderLeaf}
          placeholder="¿Has escrito algo? Previsualiza lo que escribiste en esta sección"
        />
      </Slate>
    </TabPanel>
  </div>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote className='pl-5 border-l-4 border-slate-200' style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 className='text-xl' style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 className='text-lg' style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li className='ml-6' style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol className='ml-6 list-decimal' style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code className='p-1 rounded-md dark:bg-slate-800 bg-slate-200'>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialValue = [{
      type: 'paragraph',
      children: [
        { text: ''},
      ],
    }]
// [
//   {
//     type: 'paragraph',
//     children: [
//       { text: 'This is editable ' },
//       { text: 'rich', bold: true },
//       { text: ' text, ' },
//       { text: 'much', italic: true },
//       { text: ' better than a ' },
//       { text: '<textarea>', code: true },
//       { text: '!' },
//     ],
//   },
//   {
//     type: 'paragraph',
//     children: [
//       {
//         text:
//           "Since it's rich text, you can do things like turn a selection of text ",
//       },
//       { text: 'bold', bold: true },
//       {
//         text:
//           ', or add a semantically rendered block quote in the middle of the page, like this:',
//       },
//     ],
//   },
//   {
//     type: 'block-quote',
//     children: [{ text: 'A wise quote.' }],
//   },
//   {
//     type: 'paragraph',
//     align: 'center',
//     children: [{ text: 'Try it out for yourself!' }],
//   },
// ]

export default SlateEditor