import axios from "./axios.customize";

const URL_BACKEND = "/api/v1/user";

const createUserAPI = (fullName, email, password, phone) => {
  return axios.post(URL_BACKEND, {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  });
};

const updateUserAPI = () => {};

const fetchAllUserAPI = () => {
  return axios.get(URL_BACKEND);
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
