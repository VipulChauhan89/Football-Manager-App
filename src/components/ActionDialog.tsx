import { useDispatch, useSelector } from "react-redux";
import close from "../assets/close.svg";
import pen from "../assets/pen.svg";
import trashAlt from "../assets/trash-alt.svg";
import { setActionEnabled, setDeleteEnabled, setEditEnabled } from "../redux/playerAction/playerActionSlice";
import { setPlayerName, setJerseyNumber, setStarter, setPosition, setHeight, setWeight, setNationality } from "../redux/editPlayer/editPlayerSlice";

export default function ActionDialog()
{
    const selectedPlayerIndex = useSelector((state:any) => state.playerAction.selectedPlayerIndex);
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const dispatch = useDispatch();

    const closeDialog = () => {
        dispatch(setActionEnabled(selectedPlayerIndex));
    };

    const del = () => {
        dispatch(setDeleteEnabled(true));
    };

    const edit = () => {
        const selectedPlayer = playerData[selectedPlayerIndex];
        dispatch(setPlayerName(selectedPlayer['Player Name']));
        dispatch(setJerseyNumber(selectedPlayer['Jersey Number']));
        dispatch(setStarter(selectedPlayer['Starter']==="Yes"));
        dispatch(setPosition(selectedPlayer['Position']));
        dispatch(setHeight(selectedPlayer['Height']));
        dispatch(setWeight(selectedPlayer['Weight']));
        dispatch(setNationality(selectedPlayer['Nationality']));
        dispatch(setEditEnabled(true));
    };

    return(
        <>
            <div>
                <div className="absolute top-0 left-0 w-[60px] h-full z-10"/>
                <div className="absolute top-0 left-0 w-full h-[110px] z-10"/>
                <div className="absolute top-0 left-[1400px] w-[70px] h-full z-10"/>
                <div className="relative left-[-270px] mt-[-15px] mb-[-200px] z-20 overflow-visible">
                    <div className="w-[233px] h-[167px] bg-neutral2 rounded-[8px] border-[1px] border-border pt-[16px] pr-[16px] pb-[24px] pl-[16px] shadow-2xl  shadow-bottom">
                        <div className="flex gap-[110px]">
                            <h1 className="font-poppins font-semibold text-text1 text-[18px] leading-[27px]">Actions</h1>
                            <img className="mt-[6px] w-[16px] h-[16px] hover:cursor-pointer" src={close} onClick={closeDialog}/>
                        </div>
                        <div className="flex gap-[10px] mt-[30px] hover:cursor-pointer" onClick={edit}>
                            <img className="mt-[2px] w-[16px] h-[16px]" src={pen}/>
                            <h1 className="font-poppins font-medium text-text2 text-[14px] leading-[21px]">Edit Player</h1>
                        </div>
                        <div className="flex gap-[10px] mt-[20px] hover:cursor-pointer" onClick={del}>
                            <img className="mt-[2px] w-[16px] h-[16px]" src={trashAlt}/>
                            <h1 className="font-poppins font-medium text-text2 text-[14px] leading-[21px]">Delete Player</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}