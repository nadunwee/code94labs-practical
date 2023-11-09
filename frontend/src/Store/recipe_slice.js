import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { recipes: {} };

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    allRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

const store = configureStore({ reducer: recipeSlice.reducer });

export const recipeAction = recipeSlice.actions;

export default store;
