import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormationGround {
    allStarterPlayers: any[];
    selectedPlayerIndex: number;
};

const initialState: FormationGround = {
    allStarterPlayers: [],
    selectedPlayerIndex: 0,
};

export const formationGroundSlice = createSlice({
    name: "formationGround",
    initialState,
    reducers: {
        setAllStarterPlayers: (state,action:PayloadAction<any[]>) => {
            state.allStarterPlayers=action.payload;
        },
        setSelectedPlayerIndex: (state,action:PayloadAction<number>) => {
            state.selectedPlayerIndex=action.payload;
        },
    },
});

export const { setAllStarterPlayers, setSelectedPlayerIndex } = formationGroundSlice.actions;
export default formationGroundSlice.reducer;