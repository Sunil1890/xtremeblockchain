import React from 'react';

const SellOrder= (props)=> {
  return (
    <div>
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col-1">Price</th>
          <th scope="col-1">Size</th>
          <th scope="col-1">Total</th>
        </tr>
      </thead>
      <tbody>
     {props.bid.map((item) => (
        <tr>
          <td className="text-danger">{item.price}</td>
          <td className="text-danger">{item.price}</td>
          <td className="text-danger">{item.total}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>)
}
export default SellOrder;