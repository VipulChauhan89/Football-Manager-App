import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Action {
    actionEnabled: boolean;
    editEnabled: boolean;
    deleteEnabled: boolean;
    selectedPlayerIndex: number | null;
};

const initialState: Action = {
    actionEnabled: false,
    editEnabled: false,
    deleteEnabled: false,
    selectedPlayerIndex: null,
};

export const playerActionSlice = createSlice({
    name: "playerAction",
    initialState,
    reducers: {
        setActionEnabled: (state,action:PayloadAction<number>) => {
            state.actionEnabled = (state.selectedPlayerIndex==action.payload)?false:true;
            state.selectedPlayerIndex=(state.actionEnabled==true)?action.payload:null;
        },
        setEditEnabled: (state,action:PayloadAction<boolean>) => {
            state.editEnabled=action.payload;
        },
        setDeleteEnabled: (state,action:PayloadAction<boolean>) => {
            state.deleteEnabled=action.payload;
        },
    },
});

export const { setActionEnabled, setEditEnabled, setDeleteEnabled } = playerActionSlice.actions;
export default playerActionSlice.reducer;