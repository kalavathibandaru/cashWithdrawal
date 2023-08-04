// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balanceAmount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {balanceAmount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="card">
            <div className="name-container">
              <button type="button" className="button">
                {initial}
              </button>
              <h1 className="name"> {name} </h1>
            </div>
            <div className="balance-container">
              <p className="balance">Your Balance</p>
              <div>
                <p className="starting-balance">{balanceAmount}</p>
                <p className="rupees">In Rupees</p>
              </div>
            </div>
            <div className="withdraw-container">
              <p className="withdraw"> Withdraw </p>
              <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
            </div>
            <ul className="notes-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
