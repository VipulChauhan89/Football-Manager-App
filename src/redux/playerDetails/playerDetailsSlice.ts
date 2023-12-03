import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayerDetails {
    playerData: any[];
    currentPlayerData: any[];
    playerCounts: number[];
};

const initialState: PlayerDetails = {
    playerData: [],
    currentPlayerData: [],
    playerCounts: [],
};

export const playerDetailsSlice = createSlice({
    name: "playerDetails",
    initialState,
    reducers: {
        setPlayerData: (state,action:PayloadAction<any[]>) => {
            state.playerData=action.payload;
        },
        setCurrentPlayerData: (state) => {
            state.currentPlayerData=state.playerData;
        },
        setPlayerCounts: (state,action:PayloadAction<number[]>) => {
            state.playerCounts=action.payload;
        },
        deletePlayerAtIndex: (state, action: PayloadAction<number>) => {
            const indexToDelete=action.payload;
            state.playerData=state.playerData.filter((_, index) => index !== indexToDelete);
        },
        searchCurrentPlayerData: (state,action:PayloadAction<any>) => {
            state.currentPlayerData=action.payload;
        },
        updatePlayerData(state, action:PayloadAction<any>) {
            const {index,player}=action.payload;
            state.playerData[index]=player;
            state.currentPlayerData=state.playerData;
        },
    },
});

export const { setPlayerData, setPlayerCounts, setCurrentPlayerData, deletePlayerAtIndex, searchCurrentPlayerData, updatePlayerData } = playerDetailsSlice.actions;
export default playerDetailsSlice.reducer;