import {Table, Popconfirm, Button} from 'antd';

const ProductList = ({ onDelete, products}) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '状态',
      dataIndex: 'state'
    },{
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: "Actions",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ];
  
  return <Table dataSource={products} columns={columns} rowKey={record => record.id}/>
}

export default ProductList;
