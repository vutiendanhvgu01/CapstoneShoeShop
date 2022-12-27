import React, { useState } from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { renderHistoryProduct } from "../../redux/reducers/productReducer";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Image",
    dataIndex: "image",
    render: (image) => <img src={image} alt="..." />,
  },
  {
    title: "Price",
    dataIndex: "price",
    sortOrder: "acsend",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
const data = [
  {
    id: 1,
    image:
      "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
];

const OrderHistory = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const { historyProduct } = useSelector((state) => state.productReducer);
  console.log(historyProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = renderHistoryProduct();
    dispatch(action);
  }, []);
  return (
    <div>
      {historyProduct.map((product, index) => {
        return (
          <div key={index}>
            <p>Order have been placed on: {product.date}</p>
            <table className="table m-5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {product.orderDetail?.map((prod, index) => {
                  return (
                    <tr key={index}>
                      <td>{product.id}</td>
                      <td>
                        <img src={prod.image} width={50} alt="" />
                      </td>
                      <td>{prod.price}</td>
                      <td>{prod.quantity}</td>
                      <td>{prod.price * prod.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default OrderHistory;
