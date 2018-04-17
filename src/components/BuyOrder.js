import React from 'react';

const BuyOrder= (props)=> {
  return (
    <div>
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Price</th>
          <th scope="col">Size</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
     {props.ask.map((item) => (
        <tr>
          <td className="text-success">{item.price}</td>
          <td className="text-success">{item.price}</td>
          <td className="text-success">{item.total}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>)
}
export default BuyOrder;
