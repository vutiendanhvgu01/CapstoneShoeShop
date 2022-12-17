
import React from "react";

const Carts = () => {
  return <>
    <div className="container-fluid">
      <h3>Carts</h3>
      <hr></hr>
      <table className="table" >
        <thead style={{ border: '1px solid transparent' }}>
          <tr className="text-center">
            <th>
              <input type="checkbox" />
            </th>
            <th>
              ID
            </th>
            <th>
              Image
            </th>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
            <th>
              Quantity
            </th>
            <th>
              Total
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center" style={{ border: '1px solid transparent' }}>
          <tr>
            <td>
              <input type="checkbox" checked={true}/>
            </td>
            <td>
              1
            </td>
            <td>
              <img src='' alt='...' />
            </td>
            <td>
              Product 1
            </td>
            <td>
              1000
            </td>
            <td>
              <button className="btn btn-success">
                <i class="fa fa-plus"></i>
              </button>
              <span className='cart-quantity'>1</span>
              <button className="btn btn-danger">
                <i class="fa fa-minus"></i>
              </button>
            </td>
            <td>
              1000
            </td>
            <td>
              <button className="btn btn-success">EDIT</button>
              <button className="btn btn-danger">DELETE</button>
            </td>

          </tr>
        </tbody>
        <tfoot style={{ border: '1px solid transparent' }}>
          <tr>
            <td colspan="8" className="text-end" >
              <button className="btn btn-warning" >SUBMIT ORDER</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </>;
};

export default Carts;
