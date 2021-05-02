// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";
// export default configureStore({
//   reducer: {
//     user: userReducer
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false
//   })
// });

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer
    // movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});
