import React from 'react';
import Websocket from 'react-websocket';
import SellOrder from './SellOrder';
import BuyOrder from './BuyOrder';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBook:[],
    };
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({orderBook: result})
  }

  render() {
    return (
      <div className="container-fluid">
        <Websocket url='ws://localhost:7979' onMessage={this.handleData.bind(this)}/>
        <SellOrder
          bid={this.state.orderBook.filter(
            (data)=> {
            return data.type === 'bid'
          })}
        />
        <h4 className="text-center">Buy Order</h4>
        <BuyOrder
          ask={this.state.orderBook.filter(
          (data)=> {
            return data.type === 'ask'
          })
        }/>
      </div>
    );
  }
}

export default App;
