import { Table, Pagination } from 'antd';
import { useEffect, useState } from 'react';

function App() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'John',
      age: 42,
      address: '10 Downinghhhhhhhhh Street',
    },
    // Add more data if needed
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const [paginationConfig, setPaginationConfig] = useState({
    pageSize: 10, // Number of items per page
    current: 1,   // Current page number
    total: 0, // Total number of items

    // Optional: You can customize other pagination options as needed
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['10', '20', '30', '40'],
  })

   const [tableParam, setTableParam] = useState(
    {
      filter: {},
      limit: 10,
      offset: paginationConfig.current - 1
    }
  )

  useEffect(() => {
    console.log(paginationConfig.current)
  }, [paginationConfig])

  function handleChange(pagination: any, e: any) {
    const currentPage = pagination.current;
    setPaginationConfig((prevConfig) => ({
      ...prevConfig,
      current: currentPage,
    }));
    setTableParam((prevTableParam) => ({
      ...prevTableParam,
      offset: currentPage - 1,
    }));

    // Now you can access the value of page (currentPage) here
    console.log('Current Page:', currentPage);
  }

  return (
    <>
    {tableParam.offset}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={
          paginationConfig
        }
        onChange={handleChange}
      />
      <button onClick={() => {
        
      }}></button>
    </>
  );
}

export default App;
