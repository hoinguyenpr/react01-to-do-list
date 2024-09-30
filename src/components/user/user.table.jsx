import { Table } from "antd";

const UserTable = ({ dataUsers }) => {
  const column = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return <Table columns={column} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
