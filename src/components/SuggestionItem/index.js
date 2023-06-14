// Write your code here
import './index.css'

const Welcome = props => {
  const {name, suggestionFunction} = props
  const {suggestion} = name

  const onSuggestionFunction = () => {
    suggestionFunction(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSuggestionFunction}
      />
    </li>
  )
}

export default Welcome
