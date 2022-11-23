import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'form',
  initialState: {
    valueButton: [],
  },
  reducers: {
    setValue(state: any, actions: any) {
      state.valueButton.push(actions.payload);
    },
  },
});

export const formReducer = slice.reducer;
export const formActions = slice.actions;
