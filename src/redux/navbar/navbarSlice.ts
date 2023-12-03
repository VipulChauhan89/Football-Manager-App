import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavbarState {
    selected: string;
};

const initialState:NavbarState = {
    selected:"roasterDetail",
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setSelected: (state,action: PayloadAction<string>) => {
            state.selected=action.payload;
        },
    },
});

export const { setSelected } = navbarSlice.actions;
export default navbarSlice.reducer;