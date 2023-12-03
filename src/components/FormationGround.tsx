import { useDispatch, useSelector } from "react-redux";
import soccerField from "../assets/soccer-field.svg";
import FromationErrorDialog from "./FormationErrorDialog";
import LayerForPlayersOnGround from "./LayerForPlayersOnGround";
import PlayerCard from "./PlayerCard";
import { useEffect } from "react";
import { setErrorHeading, setErrorMessage, setOpen } from "../redux/formationError/formationErrorSlice";
import { setAllStarterPlayers } from "../redux/formationGround/formationGroundSlice";

export default function FormationGround()
{
    const imported = useSelector((state:any) => state.fileImporter.imported);
    const open = useSelector((satte:any) => satte.formationError.open);
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const dispatch = useDispatch();

    useEffect(() => {
        const goalkeepers = playerData.filter((player:any) => player.Position === "Goalkeeper" && player.Starter=="Yes");
        const defenders = playerData.filter((player:any) => player.Position === "Defender" && player.Starter=="Yes");
        const midfielders = playerData.filter((player:any) => player.Position === "Midfielder" && player.Starter=="Yes");
        const forwards = playerData.filter((player:any) => player.Position === "Forward" && player.Starter=="Yes");
        const allStarter = [].concat(goalkeepers, defenders, midfielders, forwards);
        dispatch(setAllStarterPlayers(allStarter));
        if(imported)
        {
            if(goalkeepers.length+'-'+defenders.length+'-'+midfielders.length+'-'+forwards.length!="1-4-3-3")
            {
                if(goalkeepers.length!==1) 
                {
                    dispatch(setErrorHeading("Goalkeeper Error"));
                    dispatch(setErrorMessage("Please ensure there is exactly 1 goalkeeper."));
                } 
                else if(defenders.length!==4) 
                {
                    if(defenders.length<4) 
                    {
                        dispatch(setErrorHeading("Defenders Insufficient"));
                        dispatch(setErrorMessage("At least 4 defenders are required."));
                    } 
                    else 
                    {
                        dispatch(setErrorHeading("Too Many Defenders"));
                        dispatch(setErrorMessage("Ensure there are no more than 4 defenders."));
                    }
                } 
                else if(midfielders.length!==3) 
                {
                    if(midfielders.length<3) 
                    {
                        dispatch(setErrorHeading("Midfielders Insufficient"));
                        dispatch(setErrorMessage("Ensure there are at least 3 midfielders."));
                    } 
                    else 
                    {
                        dispatch(setErrorHeading("Too Many Midfielders"));
                        dispatch(setErrorMessage("Limit your roster to no more than 3 midfielders."));
                    }
                } 
                else if(forwards.length!==3) 
                {
                    if(forwards.length<3) 
                    {
                        dispatch(setErrorHeading("Forwards Insufficient"));
                        dispatch(setErrorMessage("Make sure you have at least 3 forwards."));
                    } 
                    else 
                    {
                        dispatch(setErrorHeading("Too Many Forwards"));
                        dispatch(setErrorMessage("Please keep the count of forwards to a maximum of 3."));
                    }
                }
                dispatch(setOpen(true));
            }
            else
            {
                dispatch(setOpen(false));
            }
        }
    },[]);

    return(
        <>
            <div className="ml-[100px] mr-[40px] mt-[30px] mb-[40px]">
                <div className="w-[1330px] h-[680px] bg-neutral2 rounded-[8px]">
                    <div>
                        <div className="relative top-[40px] left-[40px] flex gap-[32px] w-[1250px] h-[600px]">
                            <div>
                                {(imported && !open) && (
                                    <LayerForPlayersOnGround/>
                                )}
                                <img className="filter brightness-[70%] contrast-100 w-[900] h-[600px]" src={soccerField}/>
                            </div>
                            <div>
                                <PlayerCard/>
                            </div>
                        </div>
                        <div>
                            {(open) && (
                                <FromationErrorDialog/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}