import React from "react";
import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <Drawer
      title="User Detail"
      open={isDetailOpen}
      onClose={() => {
        setIsDetailOpen(false);
      }}
    >
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <p>{dataDetail._id}</p>
        </div>
        <div>
          <span>Full Name</span>
          <p>{dataDetail.fullName}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{dataDetail.email}</p>
        </div>
        <div>
          <span>Phone number</span>
          <p>{dataDetail.phone}</p>
        </div>
        <div>
          <span>Role</span>
          <p>{dataDetail.role}</p>
        </div>
      </div>
    </Drawer>
  );
};
export default ViewUserDetail;
