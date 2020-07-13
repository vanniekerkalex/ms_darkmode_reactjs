import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default class ThemeSwitcher extends React.Component {

	onClick() {
		this.props.toggleDarkMode()
	}

	render() {
		return (
			<button className="app__dark-mode-btn icon level-right" onClick={this.onClick.bind(this)}>
				{this.props.darkMode ? <FontAwesomeIcon icon={faSun} color={'#FFA500'} /> : <FontAwesomeIcon icon={faMoon} color={'#4D5B6B'} />}
			</button>
		)
	}

}