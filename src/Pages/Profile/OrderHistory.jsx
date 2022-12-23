import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render:  (image) => <img src={image} alt='...'/>
 },
  {
    title: 'Price',
    dataIndex: 'price',
    sortOrder:'acsend',
  },
  {
    title:'Quantity',
    dataIndex: 'quantity',
  },
  {

      title: 'Total',
      dataIndex:'total'
  }

];
const data = [
    {id:1,
    image:'https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
},
{id:2,
  image:'https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
},
{id:3,
  image:'https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
}

];

const OrderHistory = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  
  return <Table  columns={columns} dataSource={data} />;
};
export default OrderHistory;