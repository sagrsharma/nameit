import React from 'react'
import './App.css'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'
import Header from './Header'
import SearchBox from './SearchBox'
import './SearchBox.css'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
    state = {
        headerText: 'Name it',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        })
    }

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App
