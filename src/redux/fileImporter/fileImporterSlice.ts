import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Importer {
    isOpen: boolean;
    imported: boolean;
    fileName: string;
    validFile: boolean;
};

const initialState: Importer = {
    isOpen: false,
    imported: false,
    fileName: "No file selected",
    validFile: false,
};

export const fileImportSlice = createSlice({
    name: "fileImport",
    initialState,
    reducers: {
        setIsOpen: (state,action:PayloadAction<boolean>) => {
            state.isOpen=action.payload;
        },
        setImported: (state,action:PayloadAction<boolean>) => {
            state.imported=action.payload;
        },
        setFileName: (state,action:PayloadAction<string>) => {
            state.fileName=action.payload;
        },
        setValidFile: (state,action:PayloadAction<boolean>) => {
            state.validFile=action.payload;
        },
    },
});

export const { setIsOpen, setImported, setFileName, setValidFile } = fileImportSlice.actions;
export default fileImportSlice.reducer;