import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';


export const getUsers = createAsyncThunk(
    'sports/getSports',
    async () => {
      try {
        const response = await axios.get(`${url}/api/users`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );

  
export const createUser = createAsyncThunk(
    'users/createUser',
    async (payload) => {
      try {
        const response = await axios.post(`${url}/api/users`, payload);
        response ? 
        alert("You have successfully registered")
        : null
        return response.data;
      } catch (error) {
        alert(error)
      }
    }
  );

  export const deletUser = createAsyncThunk(
    'users/delet',
    async (id)=>{
      try {
        return await axios.delete(`${url}/api/users`, {data: {id:id}})
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  )