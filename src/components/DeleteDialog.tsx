import { useDispatch, useSelector } from "react-redux";
import close from "../assets/close.svg";
import { setDeleteEnabled, setActionEnabled } from "../redux/playerAction/playerActionSlice";
import { deletePlayerAtIndex, setCurrentPlayerData } from "../redux/playerDetails/playerDetailsSlice";

export default function DeleteDialog()
{
    const selectedPlayerIndex = useSelector((state:any) => state.playerAction.selectedPlayerIndex);
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const dispatch = useDispatch();

    const closeDialog = () => {
        dispatch(setDeleteEnabled(false));
    };

    const handleDelete = () => {
        dispatch(setActionEnabled(selectedPlayerIndex));
        dispatch(deletePlayerAtIndex(selectedPlayerIndex));
        dispatch(setCurrentPlayerData(playerData));
        closeDialog();
    };

    return(
        <>
            <div>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 overlay"/>
                <div className="absolute top-[300px] left-[600px] w-[379px] h-[186px] bg-neutral2 rounded-[8px] pt-[18px] pr-[24px] pb-[24px] pl-[24px] border-[1px] border-border shadow-2xl shadow-bottom shadow-right z-30">
                    <div className="w-[331px] h-[27px] flex gap-[180px]">
                        <h1 className="font-poppins font-semibold text-text1 text-[18px] leading-[27px]">Are you sure?</h1>
                        <img className="w-[16px] h-[16px] mt-[5px] hover:cursor-pointer" src={close} onClick={closeDialog}/>
                    </div>
                    <div className="w-[331px] h-[22px] mt-[20px]">
                        <h2 className="font-poppins font-normal text-text2 text-[14px] leading-[22px]">This action cannot be undone.</h2>
                    </div>
                    <div className="relative top-[35px] left-[150px] w-[184px] h-[44px] flex gap-[8px]">
                        <button className="w-[91px] h-[44px] rounded-[8px] border-[1px] border-border font-poppins font-medium text-text2 text-[14px] leading-[21px] hover:text-text1" onClick={closeDialog}>Cancel</button>
                        <button className="w-[85px] h-[44px] rounded-[8px] bg-primary3 font-poppins font-medium text-text2 text-[14px] leading-[21px] hover:bg-primary2" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}