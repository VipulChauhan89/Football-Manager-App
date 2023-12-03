import { useDispatch, useSelector } from "react-redux";
import PlayerDetail from "./PlayerDetail";
import DeleteDialog from "./DeleteDialog";
import { setIsOpen } from "../redux/fileImporter/fileImporterSlice";
import EditDialog from "./EditDialog";


export default function PlayerList()
{   
    const imported = useSelector((state:any) => state.fileImporter.imported);
    const editEnabled = useSelector((state:any) => state.playerAction.editEnabled);
    const deleteEnabled = useSelector((state:any) => state.playerAction.deleteEnabled);
    const currentPlayerData = useSelector((state:any) => state.playerDetails.currentPlayerData);
    const notFound = useSelector((satate:any) => satate.searchPlayer.notFound);
    const dispatch = useDispatch();

    
    const handleClick = () => {
        dispatch(setIsOpen(true));
    };

    return(
        <>
            <div className="ml-[100px] mr-[40px] mt-[30px] mb-[40px]">
                <div className="w-[1330px] h-[680px] bg-neutral2 rounded-[8px]">
                    <div className="flex pt-[15px] pl-[20px] gap-[150px]">
                        <div>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px]">Player Name</h1>
                        </div>
                        <div className="grid grid-cols-8 gap-[45px]">
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[370px]">Jersey Number</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[500px]">Starter</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[610px]">Position</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[750px]">Height</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[890px]">Weight</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[1020px]">Nationality</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[1180px]">Appearances</h1>
                            <h1 className="font-poppins font-medium text-text2 text-[12px] leading-[18px] absolute left-[1295px]">Minutes Played</h1>
                        </div>
                    </div>
                    <div>
                        {(!imported) ? (
                            <div>
                                <div className="absolute flex justify-center w-[90%] mt-[260px]">
                                    <h1 className="font-poppins font-normal text-text2 text-[14px] leading-[21px]">You do not have any players on the roster</h1>
                                </div>
                                <div className="absolute flex justify-center w-[90%] mt-[289px]">
                                    <button className="font-poppins font-medium text-primary1 text-[14px] leading-[21px]" onClick={handleClick}>Import Team</button>
                                </div>
                            </div>
                            ):
                            (                       
                                <div className="h-[630px] overflow-y-auto overflow-x-hidden">
                                    {currentPlayerData.map((player: any, index: any) => (
                                        <PlayerDetail index={index} key={index} player={player} />
                                    ))}
                                    {(notFound && imported) && (
                                        <div>
                                            <div className="absolute flex justify-center w-[90%] mt-[260px]">
                                                <h1 className="font-poppins font-normal text-text2 text-[14px] leading-[21px]">No players found matching your search.</h1>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {(editEnabled) && (
                            <EditDialog/>
                        )}
                    </div>
                    <div>
                        {(deleteEnabled) && (
                            <DeleteDialog/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}