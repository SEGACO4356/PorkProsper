import axios from "axios";

const UsersApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/UserView/",
});

export const getAllUsers = () =>  UsersApi.get("/");

export const getUser = (id:any) =>  UsersApi.get(`/${id}/`);

export const CreateUser = (data: any) =>  UsersApi.post("/", data);

export const DeleteUser = (id: any) =>  UsersApi.delete(`/${id}`); 

export const UpdateUser = (id: any, data:any) =>  UsersApi.put(`/${id}/`, data); 

