import { createSlice } from "@reduxjs/toolkit";

import darkModeIcon from "../../images/dark.png";
import lightModeIcon from "../../images/light.png";

export const modeSlice = createSlice({
  name: "mode",
  initialState: [
    {
      id: 0,
      src: lightModeIcon,
      active: true,
      color: "white",
      bs: "0.1px 0.1px 15px rgb(210, 210, 210)",
      bd: "2px solid gray",
      bg: "black",
      Iconbd: "1px solid white",
    },
    {
      id: 1,
      src: darkModeIcon,
      active: false,
      color: "black",
      bs: "none",
      bg: "white",
      bd: "2px solid white",
      Iconbd: "1px solid black",
    },
  ],
  reducers: {
    setActive: (state, action) => {
      state.map((item) => {
        if (action.payload.id === item.id) {
          item.active = true;
        } else if (action.payload.id !== item.id) {
          item.active = false;
        }
      });
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActive, incrementByAmount } = modeSlice.actions;

export default modeSlice.reducer;
