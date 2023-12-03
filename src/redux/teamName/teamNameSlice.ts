import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TeamName {
    editable: boolean;
    textValue: string;
    nameChanged: boolean;
    hovering: boolean;
};

const initialState: TeamName = {
    editable: false,
    textValue: "My team",
    nameChanged: false,
    hovering: false,
};

export const teamNameSlice = createSlice({
    name: "teamName",
    initialState,
    reducers: {
        setEditable: (state,action:PayloadAction<boolean>) =>{
            state.editable=action.payload;
        },
        setTextValue: (state,action:PayloadAction<string>) =>{
            state.textValue=action.payload;
        },
        setNameChanged: (state,action:PayloadAction<boolean>) =>{
            state.nameChanged=action.payload;
        },
        setHovering: (state,action:PayloadAction<boolean>) =>{
            state.hovering=action.payload;
        },
    },
});

export const { setEditable, setTextValue, setNameChanged, setHovering } = teamNameSlice.actions;
export default teamNameSlice.reducer;