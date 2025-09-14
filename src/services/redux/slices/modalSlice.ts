import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  toggleForm: boolean;
  toggleModal: boolean;
}

const initialState: ModalState = {
  toggleForm: false,
  toggleModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleForm(state) {
      state.toggleForm = !state.toggleForm;
    },
    toggleModal(state) {
      state.toggleModal = !state.toggleModal;
    },
  },
});

export const {
  toggleForm,
  toggleModal,
} = modalSlice.actions;

export default modalSlice.reducer; 