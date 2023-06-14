// Write your code here
import {Component} from 'react'

import Welcome from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  suggestionFunction = suggestion => {
    const filtertedList = suggestion
    this.setState({googleSearch: filtertedList})
  }

  change = event => {
    const filtertedList = event.target.value

    this.setState({googleSearch: filtertedList})
  }

  render() {
    const {suggestionsList} = this.props

    const {googleSearch} = this.state

    const result = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="container">
          <div className="mini-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
            <input
              placeholder="Search Google"
              type="search"
              onChange={this.change}
              value={googleSearch}
            />
          </div>
          <ul>
            {result.map(each => (
              <Welcome
                name={each}
                key={each.id}
                suggestionFunction={this.suggestionFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
