import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  //empty array => run once
  useEffect(() => {
    loadUser();
  }, []);

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

  const loadUser = async () => {
    const response = await fetchAllUserAPI();
    console.log("data user: ", response.data);
    setDataUsers(response.data);
  };

  console.log(">>run render 0");

  return <Table columns={column} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
