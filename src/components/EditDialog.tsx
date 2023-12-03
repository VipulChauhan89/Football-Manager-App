import { useDispatch, useSelector } from "react-redux";
import close from "../assets/close.svg";
import chevronDown from "../assets/chevron-down.svg";
import { setEditEnabled } from "../redux/playerAction/playerActionSlice";
import { setPlayerName, setJerseyNumber, setStarter, setPosition, setHeight, setWeight, setNationality, setEdit } from "../redux/editPlayer/editPlayerSlice";
import { useEffect } from "react";
import { updatePlayerData } from "../redux/playerDetails/playerDetailsSlice";


export default function EditDialog() 
{
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const selectedPlayerIndex = useSelector((state:any) => state.playerAction.selectedPlayerIndex);
    const playerName = useSelector((state:any) => state.editPlayer.playerName);
    const jerseyNumber = useSelector((state:any) => state.editPlayer.jerseyNumber);
    const starter = useSelector((state:any) => state.editPlayer.starter);
    const position = useSelector((state:any) => state.editPlayer.position);
    const height = useSelector((state:any) => state.editPlayer.height);
    const weight = useSelector((state:any) => state.editPlayer.weight);
    const nationality = useSelector((state:any) => state.editPlayer.nationality);
    const nationalityArray = useSelector((state:any) => state.editPlayer.nationalityArray);
    const edit = useSelector((state:any) => state.editPlayer.edit);

    useEffect(() => {
        handleUpdateEdit();
    },[playerName,jerseyNumber,starter,position,height,weight,nationality]);


    const dispatch = useDispatch();

    const closeDialog = () => {
        dispatch(setEditEnabled(false));
    };

    const handleInputChangePlayerName = (event:any) => {
        dispatch(setPlayerName(event.target.value));
    };

    const handleInputChangeJurseyNumber = (event:any) => {
        dispatch(setJerseyNumber(event.target.value));
    };

    const handleInputChangePosition = (event:any) => {
        dispatch(setPosition(event.target.value));
    };

    const handleInputChangeHeight = (event:any) => {
        dispatch(setHeight(event.target.value));
    };

    const handleInputChangeWeight = (event:any) => {
        dispatch(setWeight(event.target.value));
    };

    const handleInputChangeNationality = (event:any) => {
        dispatch(setNationality(event.target.value));
    };

    const handleChecked = (value:boolean) => {
        dispatch(setStarter(value));
    };

    const handleEdit = () => {
        const updatedPlayer = {
            ...playerData[selectedPlayerIndex],
            "Player Name": playerName,
            "Jersey Number": jerseyNumber,
            "Starter": (starter?"Yes":"No"),
            "Position": position,
            "Height": height, 
            "Weight": weight,
            "Nationality": nationality,
        };
        dispatch(updatePlayerData({ index: selectedPlayerIndex, player: updatedPlayer }));
        dispatch(setEdit(false));
        closeDialog();
    };

    const handleUpdateEdit = () => {
        const selectedPlayer = playerData[selectedPlayerIndex];
        if(selectedPlayer["Player Name"]!==playerName || selectedPlayer["Jersey Number"]!== jerseyNumber || selectedPlayer["Starter"]==="Yes"!==starter || selectedPlayer["Position"]!==position || selectedPlayer["Height"]!==height || selectedPlayer["Weight"]!==weight || selectedPlayer["Nationality"]!==nationality)
        {
            dispatch(setEdit(true));
        }
        else
        {
            dispatch(setEdit(false));
        }
    };

    return(
        <>
            <div>   
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 overlay"/>
                <div className="absolute top-[95px] left-[550px] w-[480px] h-[582px] bg-neutral2 rounded-[8px] p-[24px] border-[1px] border-border shadow-2xl shadow-bottom shadow-right z-30">
                    <div className="w-[432px] h-[27px] flex gap-[310px]">
                        <h1 className="font-poppins font-semibold text-text1 text-[18px] leading-[27px]">Edit Player</h1>
                        <img className="w-[16px] h-[16px] mt-[5px] hover:cursor-pointer" src={close} onClick={closeDialog}/>
                    </div>
                    <div className="flex mt-[24px] gap-[200px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Player Name</h2>
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Jersey Number</h2>
                    </div>
                    <div className="flex mt-[8px] gap-[16px]">
                        <input className="w-[274px] h-[44px] rounded-[8px] border-[1px] border-border pt-[12px] pr-[16px] pb-[11px] pl-[16px] bg-neutral2 font-poppins font-medium text-text2 text-[14px] leading-[21px]" type="text" value={playerName} onChange={handleInputChangePlayerName} />
                        <input className="w-[142px] h-[44px] rounded-[8px] border-[1px] border-border pt-[12px] pr-[16px] pb-[11px] pl-[16px] bg-neutral2 font-poppins font-medium text-text2 text-[14px] leading-[21px] remove-arrow" type="number" value={jerseyNumber} onChange={handleInputChangeJurseyNumber} />
                    </div>
                    <div className="flex mt-[16px] gap-[180px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Height</h2>
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Weight</h2>
                    </div>
                    <div className="flex mt-[8px] gap-[16px]">
                        <input className="w-[208px] h-[44px] bg-neutral2 border-[1px] border-border rounded-[8px] pt-[12px] pr-[16px] pb-[11px] pl-[16px] font-poppins font-normal text-text2 text-[14px] leading-[21px] remove-arrow" type="number" value={height} onChange={handleInputChangeHeight} />
                        <input className="w-[208px] h-[44px] bg-neutral2 border-[1px] border-border rounded-[8px] pt-[12px] pr-[16px] pb-[11px] pl-[16px] font-poppins font-normal text-text2 text-[14px] leading-[21px] remove-arrow" type="number" value={weight} onChange={handleInputChangeWeight} />
                    </div>
                    <div className="mt-[16px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Nationality</h2>
                    </div>
                    <div className="flex mt-[8px]">
                        <select className="flex w-[432px] h-[44px] bg-neutral2 border-[1px] border-border rounded-[8px] pt-[12px] pr-[16px] pb-[11px] pl-[16px] font-poppins font-normal text-text2 text-[14px] leading-[21px]" defaultValue={nationality} onChange={handleInputChangeNationality}>
                            {nationalityArray.map((value: string) => (
                                <option key={value}>{value}</option> 
                            ))}
                        </select>
                        <img className="w-[16px] h-[16px] absolute left-[420px] mt-[15px]"src={chevronDown}/>
                    </div>
                    <div className="mt-[16px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Position</h2>
                    </div>
                    <div className="flex mt-[8px]">
                        <select className="flex w-[432px] h-[44px] bg-neutral2 border-[1px] border-border rounded-[8px] pt-[12px] pr-[16px] pb-[11px] pl-[16px] font-poppins font-normal text-text2 text-[14px] leading-[21px]" defaultValue={position} onChange={handleInputChangePosition}>
                            <option key="Goalkeeper">Goalkeeper</option>
                            <option key="Defender">Defender</option>
                            <option key="Midfielder">Midfielder</option>
                            <option key="Forward">Forward</option>
                        </select>
                        <img className="w-[16px] h-[16px] absolute left-[420px] mt-[15px]"src={chevronDown}/>
                    </div>
                    <div className="mt-[16px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Starter</h2>
                    </div>
                    <div className="flex mt-[8px] gap-[16px]">
                        <div className="flex gap-[12px] hover:cursor-pointer" onClick={() => handleChecked(false)} onChange={() => handleChecked(false)}>
                            <input className="mt-[3px] w-[16px] h-[16px] appearance-none border-[1px] border-border checked:border-primary1 checked:border-[4px] rounded-[50%]" checked={starter==false} type="radio" onChange={() => handleChecked(false)}/>
                            <h2 className="font-poppins font-normal text-text2 text-[14px] leading-[22px]">No</h2>
                        </div>
                        <div className="flex gap-[12px] hover:cursor-pointer" onClick={() => handleChecked(true)} onChange={() => handleChecked(true)}>
                            <input className="mt-[3px] w-[16px] h-[16px] appearance-none border-[1px] border-border checked:border-primary1 checked:border-[4px] rounded-[50%]" checked={starter==true} type="radio" onChange={() => handleChecked(true)}/>
                            <h2 className="font-poppins font-normal text-text2 text-[14px] leading-[22px]">Yes</h2>
                        </div>
                    </div>
                    <div>
                        {(edit)?(
                            <button className="absolute top-[515px] left-[340px] w-[114px] h-[44px] font-poppins font-medium text-text1 text-[14px] leading-[21px] rounded-[8px] bg-primary1 hover:bg-primary2" onClick={handleEdit}>Edit Player</button>
                        ):(
                            <button className="absolute top-[515px] left-[340px] w-[114px] h-[44px] font-poppins font-medium text-text4 text-[14px] leading-[21px] rounded-[8px]">Edit Player</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
