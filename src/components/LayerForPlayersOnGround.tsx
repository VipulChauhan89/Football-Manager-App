import { useSelector } from "react-redux";
import PlayerOnGround from "./PlayerOnGround";


export default function LayerForPlayersOnGround() 
{
    const playerPositions = [
        { top: "280px", left: "60px" }, 
        { top: "65px", left: "230px" }, 
        { top: "190px", left: "215px" }, 
        { top: "380px", left: "215px" }, 
        { top: "505px", left: "230px" }, 
        { top: "100px", left: "430px" }, 
        { top: "280px", left: "430px" }, 
        { top: "470px", left: "430px" }, 
        { top: "125px", left: "630px" }, 
        { top: "280px", left: "650px" }, 
        { top: "435px", left: "630px" }, 
    ];
    
    const allStarterPlayers = useSelector((state:any) => state.formationGround.allStarterPlayers);

    return(
        <>
            <div className="absolute top-[0px] left-[0px] w-[900px] h-[600px] z-50">
                {playerPositions.map((position: any, index) => {
                    const s = allStarterPlayers[index];
                    return (
                        <PlayerOnGround key={index} index={index} top={position.top} left={position.left} jerseyNumber={s?s["Jersey Number"]:""} playerName={s?s["Player Name"]:""}/>
                    );
                })}            
            </div>
        </>
    );
}