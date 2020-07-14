import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from "../theme"

export default class ThemeSwitcher extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, setTheme }) => (
                    <button className="app__dark-mode-btn icon level-right" onClick={() => setTheme()}>
                        {theme === 'dark-mode' ? <FontAwesomeIcon icon={faSun} color={'#FFA500'} /> : <FontAwesomeIcon icon={faMoon} color={'#4D5B6B'} />}
                    </button>
                )}
            </ThemeContext.Consumer>
        )
    }

}