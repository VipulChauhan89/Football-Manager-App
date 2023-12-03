import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Player {
    playerName: string;
    jerseyNumber: number;
    starter: boolean;
    position: string;
    height: number|null;
    weight: number|null; 
    nationality: string;
    nationalityArray: any[];
    edit: boolean;
}

const initialState: Player = {
    playerName: "",
    jerseyNumber: 0,
    starter: false,
    position: "",
    height: 0,
    weight: 0,
    nationality: "",
    nationalityArray: [],
    edit: false,
}

export const editPlayerSlice = createSlice({
    name: "editPlayer",
    initialState,
    reducers: {
        setPlayerName: (state,action:PayloadAction<string>) => {
            state.playerName=action.payload;
        },
        setJerseyNumber: (state,action:PayloadAction<number>) => {
            state.jerseyNumber=action.payload;
        },
        setStarter: (state,action:PayloadAction<boolean>) => {
            state.starter=action.payload;
        },
        setPosition: (state,action:PayloadAction<string>) => {
            state.position=action.payload;
        },
        setHeight: (state,action:PayloadAction<number|null>) => {
            state.height=action.payload;
        },
        setWeight: (state,action:PayloadAction<number|null>) => {
            state.weight=action.payload;
        },
        setNationality: (state,action:PayloadAction<string>) => {
            state.nationality=action.payload;
        },
        setNationalityArray: (state,action:PayloadAction<any[]>) => {
            state.nationalityArray=action.payload;
        },
        setEdit: (state,action:PayloadAction<boolean>) => {
            state.edit=action.payload;
        },
    },
});

export const { setPlayerName, setJerseyNumber, setStarter, setPosition, setHeight, setWeight, setNationality, setNationalityArray, setEdit } = editPlayerSlice.actions;
export default editPlayerSlice.reducer;