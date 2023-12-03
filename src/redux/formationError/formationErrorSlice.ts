import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormationError{
    errorHeading: string;
    errorMessage: string;
    open: boolean;
};

const initialState: FormationError = {
    errorHeading: "No player data found",
    errorMessage: "Please importer your roster first",
    open: true,
};

export const formationErrorSlice = createSlice({
    name: "formationError",
    initialState,
    reducers: {
        setErrorHeading: (state,action:PayloadAction<string>) => {
            state.errorHeading=action.payload;
        },
        setErrorMessage: (state,action:PayloadAction<string>) => {
            state.errorMessage=action.payload;
        },
        setOpen: (state,action:PayloadAction<boolean>) => {
            state.open=action.payload;
        },
    },
});

export const { setErrorHeading, setErrorMessage, setOpen } = formationErrorSlice.actions;
export default formationErrorSlice.reducer;