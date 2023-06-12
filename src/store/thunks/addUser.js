import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk('users/add', async (user) => {
    const response = await axios.post('http://localhost:3001/users', {
        name: faker.person.fullName()
    });

    return response.data;
});

export { addUser };