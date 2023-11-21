import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try{
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			return response.data;
		} catch {
			return thunkAPI.rejectWithValue('Error with download data')
		}	
	}
)