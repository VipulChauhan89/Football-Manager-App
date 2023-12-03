import {configureStore} from "@reduxjs/toolkit";
import navbarSlice from "../redux/navbar/navbarSlice";
import teamNameSlice from "../redux/teamName/teamNameSlice";
import playerDetailsSlice from "../redux/playerDetails/playerDetailsSlice";
import fileImporterSlice from "../redux/fileImporter/fileImporterSlice";
import playerActionSlice from "../redux/playerAction/playerActionSlice";
import editPlayerSlice from "../redux/editPlayer/editPlayerSlice";
import searchPlayerSlice from "../redux/searchPlayer/searchPlayerSlice";
import formationGroundSlice from "../redux/formationGround/formationGroundSlice";
import formationErrorSlice from "../redux/formationError/formationErrorSlice";

export const store = configureStore({
    reducer:{
        navbar: navbarSlice,
        teamName: teamNameSlice,
        playerDetails: playerDetailsSlice,
        fileImporter: fileImporterSlice,
        playerAction: playerActionSlice,
        editPlayer: editPlayerSlice,
        searchPlayer: searchPlayerSlice,
        formationGround: formationGroundSlice,
        formationError: formationErrorSlice,
    },
});