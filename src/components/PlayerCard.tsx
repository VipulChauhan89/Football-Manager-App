import { useSelector } from "react-redux";

export default function PlayerCard()
{
    const allStarterPlayers = useSelector((state:any) => state.formationGround.allStarterPlayers);
    const selectedPlayerIndex = useSelector((state:any) => state.formationGround.selectedPlayerIndex);
    const selectedPlayer = allStarterPlayers[selectedPlayerIndex];
    const open = useSelector((state:any) => state.formationError.open);

    return(
        <>
            <div className="w-[322px] h-[600px] bg-neutral1 rounded-[4px] p-[24px]">
                {(selectedPlayer!=null && !open) && (
                    <div className="flex">
                        <div>
                            <h1 className="font-poppins font-semibold text-primary1 text-[41.14px] leading-[61.71px] mt-[20px] absolute z-10">{selectedPlayer["Jersey Number"]}</h1>
                        </div>
                        <h1 className="font-poppins font-semibold text-neutral2 text-[109px] leading-[100px] absolute left-[945px]">{selectedPlayer["Jersey Number"]}</h1>
                        <div>
                            <img className="w-[175px] h-[280px] absolute left-[1005px]" src={selectedPlayer["Player Image"]}/>
                            <div className="absolute left-[1005px] w-[175px] h-[100px] bg-gradient-to-t from-neutral1 to-transparent mt-[180px]"></div>
                        </div>
                        <div className="absolute top-[235px] left-[950px] z-10">
                            <h1 className=" font-poppins font-medium text-text1 text-[24px] leading-[36px]">{selectedPlayer["Player Name"]}</h1>
                            <h3 className="font-poppins font-semibold text-primary1 text-[18px] leading-[27px]">{selectedPlayer["Position"]}</h3>
                        </div>
                        <div className="flex absolute top-[340px] left-[950px] gap-[32px]">
                            <h2 className="font-poppins font-normal text-text2 text-[12px] leading-[18px]">Height</h2>
                            <h2 className="font-poppins font-normal text-text2 text-[12px] leading-[18px]">Weight</h2>
                            <h2 className="font-poppins font-normal text-text2 text-[12px] leading-[18px]">Nationality</h2>
                        </div>
                        <div className="flex absolute top-[370px] left-[950px]">
                            <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px] w-[60px]">{selectedPlayer["Height"]/100} m</h2>
                            <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px] absolute left-[70px] w-[60px]">{selectedPlayer["Weight"]} Kg</h2>
                            <div className="flex absolute left-[140px] w-fit gap-[5px]">
                                <img className="mt-[2px] w-[16px] h-[16px]" src={selectedPlayer["Flag Image"]}/>
                                <h2 className="font-poppins font-medium text-text1 text-[14px] leading-[21px] w-[140px]">{selectedPlayer["Nationality"]}</h2>
                            </div>
                        </div>
                    </div>
                )}
                <hr className="border-border w-[274px] relative top-[390px] border-[1px]"/>
                {(selectedPlayer!=null && !open) && (
                    <div className="w-[274px] h-[116px] absolute left-[950px] top-[450px]">
                        <div className="grid grid-rows-2 gap-[15px]">
                            <div className="flex gap-[50px]">
                                <div className="w-[82px] h-[50px]">
                                    <h1 className="font-poppins font-semibold text-primary1 text-[24px] leading-[36px]">{selectedPlayer["Appearances"]}</h1>
                                    <h3 className="font-poppins font-normal text-text2 text-[12px] leading-[18px] mt-[-5px]">Appearances</h3>
                                </div>
                                <div className="w-[91px] h-[50px]">
                                <h1 className="font-poppins font-semibold text-primary1 text-[24px] leading-[36px]">{selectedPlayer["Minutes Played"]}</h1>
                                    <h3 className="font-poppins font-normal text-text2 text-[12px] leading-[18px] mt-[-5px]">Minutes Played</h3>
                                </div>
                            </div>
                            <div className="flex gap-[50px]">
                                <div className="w-[82px] h-[50px]">
                                    <h1 className="font-poppins font-semibold text-primary1 text-[24px] leading-[36px]">{selectedPlayer["Clean Sheets"]}</h1>
                                    <h3 className="font-poppins font-normal text-text2 text-[12px] leading-[18px] mt-[-5px]">Clean Sheets</h3>
                                </div>
                                <div className="w-[91px] h-[50px]">
                                    <h1 className="font-poppins font-semibold text-primary1 text-[24px] leading-[36px]">{selectedPlayer["Saves"]}</h1>
                                    <h3 className="font-poppins font-normal text-text2 text-[12px] leading-[18px] mt-[-5px]">Saves</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}