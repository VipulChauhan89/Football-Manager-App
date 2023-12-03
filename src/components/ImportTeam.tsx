import { useDispatch, useSelector } from "react-redux";
import { setFileName, setIsOpen } from "../redux/fileImporter/fileImporterSlice";
import { setPlayerCounts } from "../redux/playerDetails/playerDetailsSlice";

export default function ImportTeam()
{
    const imported = useSelector((state:any) => state.fileImporter.imported);
    const dispatch = useDispatch();

    const handleClick = () =>
    {  
        dispatch(setFileName("No file selected"));
        dispatch(setPlayerCounts([]));
        dispatch(setIsOpen(true));
    };

    return(
        <>
            <div>
                {(imported)?(
                    <button className="text-text2 font-poppins position  w-[132px] h-[44px] rounded-[8px] pt-[12px] pr-[5px] pb-[11px] pl-[5px] font-medium text-[14px] leading-[21px] hover:text-text1 border-[1px] border-border" onClick={handleClick}>
                        Re-Import Team
                    </button>
                    ):(
                    <button className="bg-primary1 text-text1 font-poppins position  w-[132px] h-[44px] rounded-[8px] pt-[12px] pr-[20px] pb-[11px] pl-[20px] font-medium text-[14px] leading-[21px] hover:bg-primary2" onClick={handleClick}>
                        Import Team
                    </button>
                )}
            </div>
        </>
    );
}