import axios from 'axios';

export const loadUserApi = async()=>
await axios.get("http://localhost:5000/users");

export const createUserapi = async(user) =>
await axios.post("http://localhost:5000/users",user);

export const deleteUserapi = async(userId) =>
await axios.delete(`http://localhost:5000/users/${userId}`);

export const updateUserapi = async(userId, userInfo) =>
await axios.put(`http://localhost:5000/users/${userId}`,userInfo);