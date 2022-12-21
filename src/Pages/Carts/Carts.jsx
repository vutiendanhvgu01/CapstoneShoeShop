import React from "react";
import { useSelector } from "react-redux";
const Carts = () => {
  const { cartProducts } = useSelector((state) => state.productReducer);
  return (
    <>
      <div className="container-fluid">
        <h3>Carts</h3>
        <hr></hr>
        <table className="table">
          <thead style={{ border: "1px solid transparent" }}>
            <tr className="text-center">
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody
            className="text-center"
            style={{ border: "1px solid transparent" }}
          >
            {cartProducts.map((prod, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" checked={true} />
                  </td>
                  <td>{prod.id}</td>
                  <td>
                    <img src={prod.image} width={100} alt="..." />
                  </td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>
                    <button className="btn btn-success">
                      <i class="fa fa-plus"></i>
                    </button>
                    <span className="cart-quantity">{prod.quantity}</span>
                    <button className="btn btn-danger">
                      <i class="fa fa-minus"></i>
                    </button>
                  </td>
                  <td>{prod.quantity * prod.price}</td>
                  <td>
                    <button className="btn btn-success">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot style={{ border: "1px solid transparent" }}>
            <tr>
              <td colspan="8" className="text-end">
                <button className="btn btn-warning">SUBMIT ORDER</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Carts;
