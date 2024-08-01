import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phoneNumber) => {
  const URL_BACKEND = "/api/v1/user";
  return axios.post(URL_BACKEND, {
    fullName: fullName,
    email: email,
    password: password,
    phone: phoneNumber,
  });
};

export default createUserAPI;
