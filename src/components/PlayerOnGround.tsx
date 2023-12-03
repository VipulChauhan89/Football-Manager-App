import { useDispatch, useSelector } from "react-redux";
import { setSelectedPlayerIndex } from "../redux/formationGround/formationGroundSlice";

export default function PlayerOnGround(props:any)
{
    const playerStyle = {
        top: props.top,
        left: props.left,
        position: 'absolute',
    };

    const selectedPlayerIndex = useSelector((state:any) => state.formationGround.selectedPlayerIndex);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedPlayerIndex(props.index));
    };
    
    return(
        <>
            <div style={playerStyle}>
                <div>
                    <div>
                        {(selectedPlayerIndex===props.index)?(
                            <div className="w-[32px] h-[32px] rounded-[50%] border-[2px] border-primary1 bg-primary1 text-center pt-[3px]">
                                <h1 className="font-poppins font-semibold text-text1 text-[16px] leading-[24px]">{props.jerseyNumber}</h1>
                            </div>
                        ):(
                            <div className="w-[32px] h-[32px] rounded-[50%] border-[2px] border-text2 bg-neutral2 text-center pt-[3px] hover:cursor-pointer" onClick={handleClick}>
                                <h1 className="font-poppins font-semibold text-text1 text-[16px] leading-[24px]">{props.jerseyNumber}</h1>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{ transform: `translateX(-38%)` }} className="relative top-[5px]">
                    <div>
                        <h1 className="font-poppins font-medium text-text1 text-[14px] leading-[21px]">{props.playerName}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}