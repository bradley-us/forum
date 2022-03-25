import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import CodeIcon from '@mui/icons-material/Code'
import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import TextDecreaseIcon from '@mui/icons-material/TextDecrease'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import RedoIcon from '@mui/icons-material/Redo'
import UndoIcon from '@mui/icons-material/Undo'

import SmIconX from "../min_components/SmIconX"
import SmallMenuOptions from '../min_components/SmallMenuOptions'

const styles = null
const iconStyles = {fontSize: 20}

export const BoldIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatBoldIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const ItalyIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatItalicIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const UnderlinedIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatUnderlinedIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const CodedIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <CodeIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const HeadOneIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <TextIncreaseIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const HeadTwoIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <TextDecreaseIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const QuoteIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatQuoteIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const ListNoIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatListNumberedIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const ListIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatListBulletedIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const TextLeftIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatAlignLeftIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const TextCenterIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatAlignCenterIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const TextRightIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatAlignRightIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const TextJustifyIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatAlignJustifyIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const StrikeTextIcon = () : JSX.Element => {
  return (
    <SmIconX className={styles}>
      <FormatStrikethroughIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const CodeBlockIcon = () => {
  return (
    <SmIconX className={styles}>
      <IntegrationInstructionsIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const ReDoIcon = () => {
  return (
    <SmIconX className={styles}>
      <RedoIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const UnDoIcon = () => {
  return (
    <SmIconX className={styles}>
      <UndoIcon sx={iconStyles} />
    </SmIconX>
  )
}

export const MenuOptions = ({menuSubOptionsProps, menuTitleProp}:any) => {
  return (
    <SmallMenuOptions
      menuSubOptions={menuSubOptionsProps}
      menuTitle={menuTitleProp}
    />
  )
}