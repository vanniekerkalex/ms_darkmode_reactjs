import React from 'react'
import ThemeContext from "../theme"


export default class AppContainer extends React.Component {

    setTheme = () => {
        let theme = (this.state.theme === 'light' ? 'dark-mode' : 'light')
        this.setState({ theme })
    };

    state = {
        theme: "light",
        setTheme: this.setTheme
    };

    render() {
        const { children } = this.props

        return (
            <ThemeContext.Provider value={this.state}>
                <div className={`app-container ${this.state.theme}`}>
                    {children}
                </div>
            </ThemeContext.Provider>
        )
    }

}