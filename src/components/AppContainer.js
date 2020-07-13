import React from 'react'
import App from './App'

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = { darkMode: false }
	}

	toggleDarkMode() {

		this.setState(state => ({
			darkMode: !this.state.darkMode
		}))
	}

	render() {
		return (
			<div className={`app-container ${this.state.darkMode ? 'dark-mode' : ''}`}>
				<App toggleDarkMode={this.toggleDarkMode.bind(this)} darkMode={this.state.darkMode} />
			</div>
		)
	}

}
