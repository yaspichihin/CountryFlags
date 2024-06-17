import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
};

// slice
export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    resetControls: () => initialState,
  },
});

// actions
export const { setSearch, setRegion, resetControls } = controlsSlice.actions;

// reducer
export const controlsReducer = controlsSlice.reducer;

// selectors
export function selectSearch(state) {
  return state.controls.search;
}

export function selectRegion(state) {
  return state.controls.region;
}

export function selectControls(state) {
  return state.controls;
}
