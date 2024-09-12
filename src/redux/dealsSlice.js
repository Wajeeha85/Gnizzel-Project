import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDealData: (state, { payload }) => {
      state.data = {
        ...state.data,
        [payload.name]: payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDealData } = dealsSlice.actions;

export default dealsSlice.reducer;
