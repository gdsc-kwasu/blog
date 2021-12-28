import { useContext } from 'react'
import { BiSun } from 'react-icons/bi'
import { AppThemeContext, THEME_STORAGE_KEY } from 'src/AppTheme'
import { BtnToggleTheme } from './styled/Header.styled'

const ThemeToggleButton = () => {
  const { setThemeMode } = useContext(AppThemeContext)

  const handleClick = () => {
    setThemeMode((themeMode) => {
      const value = themeMode === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(THEME_STORAGE_KEY, value)
      return value
    })
  }

  return (
    <BtnToggleTheme onClick={handleClick}>
      <BiSun />
    </BtnToggleTheme>
  )
}

export default ThemeToggleButton
