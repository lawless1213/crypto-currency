import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/AuthService";
import { IUser } from "../../models/IUser";
import { UserRegisterParams } from "../../models/IAPIUser";

interface InitialStateInterface {
	data: IUser | null;
	status: string;
}

const initialState:InitialStateInterface = {
	data: null,
	status: '',
};

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (user: UserRegisterParams) => {
	const { data } = await axios.post('/auth/register', user);
	return data;
})

const UserReducerSlice = createSlice({
  name: 'auth',
  initialState,
	reducers: {

	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'failed';
        state.data = null;
      });
  },
});

export const UserReducer = UserReducerSlice.reducer;
