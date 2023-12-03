import { useDispatch, useSelector } from "react-redux";
import threeDots from "../assets/three-dots.svg";
import ActionDialog from "./ActionDialog";
import { setActionEnabled } from "../redux/playerAction/playerActionSlice";

export default function PlayerDetail(props:any) 
{
    const actionEnabled = useSelector((state:any) => state.playerAction.actionEnabled);
    const selectedPlayerIndex = useSelector((state:any) => state.playerAction.selectedPlayerIndex);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setActionEnabled(props.index));
    };
    return(
        <>
            <div className="flex pt-[10px] pl-[20px] gap-[150px] mt-[15px]">
                <div className="flex gap-[8px]">
                    <img className="w-[24px] h-[24px] border-[1px] border-text2 rounded-[50%] mt-[-2px]" src={props.player['Flag Image']}/>
                    <h4 className="w-[235px] font-poppins font-medium text-text2 text-[14px] leading-[21px]">{props.player['Player Name']}</h4>
                </div>
                <div className="flex">
                    <h4 className="w-[120px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-140px]">{props.player['Jersey Number']}</h4>
                    <h4 className="w-[100px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-130px]">{props.player['Starter']}</h4>
                    <h4 className="w-[130px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-120px]">{props.player['Position']}</h4>
                    <h4 className="w-[130px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-110px]">{props.player['Height']/100}{props.player['Height'] !== "Unknown" && " m"}</h4>
                    <h4 className="w-[120px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-95px]">{props.player['Weight']}{props.player['Weight'] !== "Unknown" && " kg"}</h4>
                    <h4 className="w-[150px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-85px]">{props.player['Nationality']}</h4>
                    <h4 className="w-[100px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-75px]">{props.player['Appearances']}</h4>
                    <h4 className="w-[100px] font-poppins font-medium text-text2 text-[14px] leading-[21px] relative left-[-55px]">{props.player['Minutes Played']}</h4>
                    <img className="relative left-[-50px] mt-[5px] hover:cursor-pointer" src={threeDots} onClick={handleClick}></img>
                    <div>
                        {(actionEnabled && selectedPlayerIndex===props.index) &&(
                            <ActionDialog/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}