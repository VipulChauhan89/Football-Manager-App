import close from "../assets/close.svg";
import { useEffect } from "react";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerData, setPlayerCounts, setCurrentPlayerData } from "../redux/playerDetails/playerDetailsSlice";
import { setFileName, setValidFile, setIsOpen, setImported } from "../redux/fileImporter/fileImporterSlice";
import { setNationalityArray } from "../redux/editPlayer/editPlayerSlice";
import { setOpen } from "../redux/formationError/formationErrorSlice";

export default function ImporterDialog()
{
    const fileName = useSelector((state:any) => state.fileImporter.fileName);
    const validFile =useSelector((state:any) => state.fileImporter.validFile);
    const playerCounts = useSelector((state:any) => state.playerDetails.playerCounts) ;
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const dispatch = useDispatch();
    
    const closeDialog = () => {
        dispatch(setIsOpen(false));
    };

    const imported = () => {
        if(playerData.length!==0)
        {
            dispatch(setImported(true));
            dispatch(setOpen(false));
        }
        dispatch(setCurrentPlayerData(playerData));
        findNationalities();
        closeDialog();
    };

    useEffect(()=>{
        const totalPlayers=playerData.length;
        const goalkeepers=countPlayersByPosition('Goalkeeper');
        const defenders=countPlayersByPosition('Defender');
        const midfielders=countPlayersByPosition('Midfielder');
        const forwards=countPlayersByPosition('Forward');
        dispatch(setPlayerCounts([totalPlayers, goalkeepers, defenders, midfielders, forwards]));
    },[playerData]);


    const handleFileUpload = async (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if(file) 
        {
            dispatch(setFileName(file.name));
            dispatch(setValidFile(true));
            const parsedData=await parseCSV(file);
            if (parsedData.length > 0 && !checkMissingData(parsedData)) {
                dispatch(setPlayerData(parsedData));
            } else {
                dispatch(setValidFile(false));
            }
        }
    };

    const parseCSV = (file: File): Promise<any[]> => {
        return new Promise((resolve) => {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: 'greedy',
                complete: (results) => {
                    resolve(results.data);
                },
            });
        });
    };

    const checkMissingData = (data: any[]): boolean => {
        return data.some((row) => Object.values(row).some((value) => value === '' || value === undefined));
    };

    const countPlayersByPosition = (position: string): number => {
        return playerData.filter((player:any) => player.Position === position).length;
    };

    const findNationalities = () => {
        dispatch(setNationalityArray([...new Set(playerData.map((player:any) => player.Nationality))]));
    };

    return(
        <>
            <div>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 overlay"/>
                <div className="absolute w-[900px] h-[640px] top-[83px] left-[300px] rounded-[8px] bg-neutral2 border-[1px] border-border shadow-2xl shadow-bottom shadow-right z-20">
                    <div className="flex mt-[18px] ml-[24px] gap-[750px]">
                        <h1 className="font-poppins font-semibold text-text1 text-[18px] leading-[27px]">Importer</h1>
                        <img className="hover:cursor-pointer" onClick={closeDialog} src={close}/>
                    </div>
                    <hr className="ml-[24px] mr-[24px] w-[95%] mt-[15px] border-border border-[1px]"/>
                    <div className="mt-[23px] ml-[24px]">
                        <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">Roster File</h2>
                        <div className={`w-[300px] h-[44px] border-[1px] ${(!validFile && fileName!="No file selected")?'border-primary3':'border-border'} rounded-[8px] mt-[10px]`}>
                            <h3 className="font-poppins font-normal text-text3 text-[14px] leadin-[21px] pl-[20px] pt-[10px]">{fileName}</h3>
                            <label htmlFor="fileUpload" className={`w-[110px] h-[44px] border-[1px] ${(!validFile && fileName!="No file selected")?'border-primary3':'border-border'} rounded-[8px] absolute left-[214px] top-[116px] font-poppins font-medium text-text2 text-[14px] leading-[21px] hover:text-text1 pt-[10px] flex justify-center`}>
                                Select File
                                <input id="fileUpload" type="file" style={{ display: 'none' }} onChange={handleFileUpload} accept=".csv"/>
                            </label>
                        </div>
                        <div>
                            {(!validFile && fileName!="No file selected")? (
                                <div>
                                    <h2 className="font-poppins font-medium text-primary3 text-[14px] leading-[21px] mt-[16px]">Error</h2>
                                    <h2 className="font-poppins font-normal text-text3 text-[14px] leading-[21px] mt-[10px]">Your sheet is missing data. Please ensure all cells are filled out.</h2>
                                </div>
                                ):
                                (<h2 className="font-poppins font-normal text-text3 text-[14px] leading-[21px] mt-[16px]">File must be in .csv format</h2>)
                            }
                        </div>
                    </div>
                    <div>
                        {(validFile && fileName!=="No file selected")?
                            <div className="ml-[24px]">
                                <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px] mt-[32px]">File Summary</h2>
                                <div className="mt-[24px]">
                                    <div className="flex">
                                        <h4 className="font-poppins font-normal text-text2 text-[14px] leading-[21px]">Total Players</h4>
                                        <h4 className="font-poppins font-normal text-text2 text-[14px] leading-[21px] absolute left-[200px]">Goalkeepers</h4>
                                        <h4 className="font-poppins font-normal text-text2 text-[14px] leading-[21px] absolute left-[380px]">Defenders</h4>
                                        <h4 className="font-poppins font-normal text-text2 text-[14px] leading-[21px] absolute left-[550px]">Midfielders</h4>
                                        <h4 className="font-poppins font-normal text-text2 text-[14px] leading-[21px] absolute left-[710px]">Forwards</h4>
                                    </div>
                                    <div className="flex mt-[10px]">
                                        <p className="font-poppins font-semibold text-text2 text-[16px] leading-[24px]">{playerCounts[0]}</p>
                                        <p className="font-poppins font-semibold text-text2 text-[16px] leading-[24px] absolute left-[200px]">{playerCounts[1]}</p>
                                        <p className="font-poppins font-semibold text-text2 text-[16px] leading-[24px] absolute left-[380px]">{playerCounts[2]}</p>
                                        <p className="font-poppins font-semibold text-text2 text-[16px] leading-[24px] absolute left-[550px]">{playerCounts[3]}</p>
                                        <p className="font-poppins font-semibold text-text2 text-[16px] leading-[24px] absolute left-[710px]">{playerCounts[4]}</p>
                                    </div>
                                </div>
                                <button className="w-[88px] h-[44px] font-poppins font-medium text-text1 text-[14px] leading-[21px] absolute top-[570px] left-[780px] bg-primary1 rounded-[8px] hover:bg-primary2" onClick={imported}>Import</button>
                            </div>
                            :
                            <button className="w-[88px] h-[44px] font-poppins font-medium text-text4 text-[14px] leading-[21px] absolute top-[570px] left-[780px] rounded-[8px]">Import</button>
                        }
                    </div> 
                </div>                
            </div>
        </>
    );
}