// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenominations = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="note" onClick={onClickDenominations}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
