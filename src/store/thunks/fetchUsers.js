import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3001/users');

    //Developer only
    await pause(1000);

    return response.data;
});

//Developer only
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { fetchUsers };