import UserInput from "../components/user/user.form";
import UserTable from "../components/user/user.table";

const UserPage = () => {
  return (
    <div>
      User page
      <div style={{ padding: "20px" }}>
        <UserInput />
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
