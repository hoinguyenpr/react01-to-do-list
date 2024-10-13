import React, { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const {
    isModalUpdate,
    setIsModalUpdate,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  // next dataUpdate != prev dataUpdate
  useEffect(() => {
    console.log(">>>>Data props: ", dataUpdate);
    if (dataUpdate) {
      loadModal(dataUpdate);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    setIsModalUpdate(false);
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "update user",
        description: "Update user success!",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdate(false);
    setId("");
    setFullName("");
    setPhone("");
  };

  const loadModal = (dataUpdate) => {
    setId(dataUpdate._id);
    setFullName(dataUpdate.fullName);
    setPhone(dataUpdate.phone);
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update User"
      open={isModalUpdate}
      onOk={handleSubmitBtn}
      onCancel={resetAndCloseModal}
      okText="Save"
    >
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
