import { useDispatch, useSelector } from "react-redux";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import { setSearch, setSearched, setNotFound } from "../redux/searchPlayer/searchPlayerSlice";
import { searchCurrentPlayerData } from "../redux/playerDetails/playerDetailsSlice";
import close from "../assets/close.svg";

export default function FindPlayer()
{
    const search = useSelector((state:any) => state.searchPlayer.search);
    const playerData = useSelector((state:any) => state.playerDetails.playerData);
    const searched = useSelector((state:any) => state.searchPlayer.searched);
    const dispatch = useDispatch();

    const handleInputChange = (event:any) => {
        dispatch(setSearch(event.target.value));
    };

    const handleKeyPress = (event:any) => {
        if(event.key==='Enter') 
        {
            handleSearch();
        }
        else if(event.key==='Escape')
        {
            handleCancelSearch();
        }
    };
    
    const handleSearch = () => {
        const filteredPlayers: any[] = playerData.filter((player:any) => {
            const searchLowerCase = search.toLowerCase();
            const playerName = player['Player Name'].toLowerCase();
            const playerPosition = player['Position'].toLowerCase();
            const nameMatch = playerName.includes(searchLowerCase);
            const positionMatch = playerPosition.includes(searchLowerCase);
            return nameMatch || positionMatch;
        });
        dispatch(searchCurrentPlayerData(filteredPlayers));
        dispatch(setSearched(true));
        if(filteredPlayers.length==0)
        {
            dispatch(setNotFound(true));
        }
        else
        {
            dispatch(setNotFound(false));
        }
    };
    
    const handleCancelSearch = () => {
        dispatch(searchCurrentPlayerData(playerData));
        dispatch(setSearch(""));
        dispatch(setSearched(false));
    };

    return(
        <>
            <div className="w-[248px] h-[44px]">
                <img className="absolute top-[15px] left-[16px]" src={magnifyingGlass}/>
                <input className="w-[248px] border-[1px] border-border rounded-[8px] bg-neutral1 pt-[12px] pr-[0px] pb-[11px] pl-[40px] font-poppins font-normal text-[14px] leading-[21px] text-text2" 
                    placeholder="Find Player" 
                    value={search} 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyPress}
                />
                <div>
                    {(!searched)? (
                        (search!=="") && (
                            <div>
                                <button className="absolute right-[160px] top-[12px] font-poppins font-medium text-[14px] leading-[21px] text-primary1" onClick={handleSearch}>Search</button>
                            </div>
                        )
                    ):(
                        (search!=="") && (
                            <div>
                                <img className="absolute right-[160px] mt-[-30px] hover:cursor-pointer" 
                                    src={close} 
                                    onClick={handleCancelSearch}
                                />
                            </div>
                        )
                    )
                    }
                </div>
            </div>
        </>
    );
}