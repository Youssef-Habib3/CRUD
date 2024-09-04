import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Youssef Habib",
    email: "yousefhabibelsehamy33@gamil.com",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;

      const update = state.find((user) => user.id == id);

      if (update) {
        update.name = name;
        update.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;

      const del = state.find((user) => user.id == id);

      if (del) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export default userSlice.reducer;

export const { createUser, updateUser, deleteUser } = userSlice.actions;
