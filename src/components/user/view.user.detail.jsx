import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, isDetailOpen, setIsDetailOpen } = props;

  console.log("dataDetail: ", dataDetail);

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
        <div>
          <span>Avatar</span>
          <img
            style={{
              marginTop: "15px",
              display: "block",
              width: "50%",
            }}
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              dataDetail.avatar
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="btnUpload"
            style={{
              display: "block",
              width: "fit-content",
              marginTop: "15px",
              padding: "5px 10px",
              background: "orange",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Upload Avatar
          </label>
          <input type="file" hidden id="btnUpload" />
        </div>
      </div>
    </Drawer>
  );
};
export default ViewUserDetail;
