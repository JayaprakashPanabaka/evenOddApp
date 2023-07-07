// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, num: 'Even'}

  onIncrement = () => {
    const {count, num} = this.state
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))

    // this.setState(prevState => ({
    //   num: prevState.num + ({count} % 2) === 0 ? 'Even' : 'Odd',
    // }))
    // this.setState((count) => ({
    //     if (count % 2 === 0) {
    //         return num : 'Even'
    //     } else {return num : 'Odd'}
    // }))
  }

  //   if ()
  render() {
    const {count, num} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Count {count}</h1>
          <p className="heading4">Count is {count % 2 === 0 ? num : 'Odd'}</p>
          <button onClick={this.onIncrement} type="button" className="btn">
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100"</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
