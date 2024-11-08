import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ModalView } from "../../models/IModals";

const initialState = {
  modalView: null as ModalView | null,
}

export const modalSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openModal(state, action: PayloadAction<{ view: ModalView }>) {
			state.modalView = action.payload.view;
		},

		closeModal(state) {
			state.modalView = null
		}
	}
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;