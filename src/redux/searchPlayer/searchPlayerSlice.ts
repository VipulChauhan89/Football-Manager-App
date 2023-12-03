import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Search {
    search: string;
    searched: boolean;
    notFound: boolean;
};

const initialState: Search = {
    search: "",
    searched: false,
    notFound: false,
};

export const searchPlayerSlice = createSlice({
    name: "searchPlayer",
    initialState,
    reducers: {
        setSearch: (state,action:PayloadAction<string>) => {
            state.search=action.payload;
        },
        setSearched: (state,action:PayloadAction<boolean>) => {
            state.searched=action.payload;
        },
        setNotFound: (state,action:PayloadAction<boolean>) => {
            state.notFound=action.payload;
        },
    },
});

export const { setSearch, setSearched, setNotFound } = searchPlayerSlice.actions;
export default searchPlayerSlice.reducer;