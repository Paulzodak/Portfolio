import { configureStore } from "@reduxjs/toolkit";
import mode from "./mode";

export default configureStore({
  reducer: {
    mode: mode,
  },
});
