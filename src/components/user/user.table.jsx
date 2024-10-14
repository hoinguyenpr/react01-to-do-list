import React, { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = ({ dataUsers, loadUser }) => {
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [dataDetail, setDataDetail] = useState({});
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDeleteBtn = async (id) => {
    setIsModalUpdate(false);
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "delete user",
        description: "Delete user success!",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const column = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          >
            {record._id}
          </a>
        </>
      ),
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdate(true);
            }}
            style={{ cursor: "pointer", color: "blue" }}
          />
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDeleteBtn(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={column} dataSource={dataUsers} rowKey={"_id"} />;
      <UpdateUserModal
        isModalUpdate={isModalUpdate}
        setIsModalUpdate={setIsModalUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        dataDetail={dataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />
    </>
  );
};

export default UserTable;
