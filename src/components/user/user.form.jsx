import React from "react";
import { Button, Input } from "antd";

const UserInput = () => {
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Full Name</span>
          <Input></Input>
        </div>
        <div>
          <span>Email</span>
          <Input></Input>
        </div>
        <div>
          <span>Password</span>
          <Input.Password></Input.Password>
        </div>
        <div>
          <span>Phone number</span>
          <Input></Input>
        </div>
        <div>
          <Button type="primary">Create User</Button>
        </div>
      </div>
    </div>
  );
};
export default UserInput;
