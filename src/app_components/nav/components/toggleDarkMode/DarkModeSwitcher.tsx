import React, { useState } from 'react'
import useDarkModeToggle from '../../../../hooks/useDarkModeToggle'

const DarKModeSwitcher = () : JSX.Element => {
  const [colorTheme, setColorTheme] = useDarkModeToggle()
  const [darkMode, setDarkMode] = useState( colorTheme === 'light' ? true : false)

  const toggleDarkMode = () : void => {
    setColorTheme(colorTheme);
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <input 
        type='checkbox'
        checked={darkMode}
        onChange={toggleDarkMode}
        size={56}
      />
    </div>
  )
}

export default DarKModeSwitcher