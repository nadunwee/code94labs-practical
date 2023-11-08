import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "recipe",
  initialState: { items: [] },
  reducers: {
    addNewRecipe(state, action) {
      const newRecipe = action.payload;
      const existingRecipe = state.items.find(
        (item) => item.id === newRecipe.id
      );
      if (!existingRecipe) {
        state.items.push({
          name: newRecipe.name,
          ingredients: newRecipe.ingredients,
          description: newRecipe.description,
        });
      }
    },
  },
});
