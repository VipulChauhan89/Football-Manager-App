import { useSelector } from "react-redux";
import triangleExclamation from "../assets/triangle-exclamation.svg";

export default function FromationErrorDialog()
{
    const errorHeading = useSelector((state:any) => state.formationError.errorHeading);
    const errorMessage = useSelector((state:any) => state.formationError.errorMessage);
    return(
        <>
            <div className="absolute w-[420px] h-[120px] left-[540px] top-[365px] bg-neutral2 rounded-[8px] px-[24px] py-[26px] shadow">
                <div className="flex justify-center gap-[8px]">
                    <img src={triangleExclamation}/>
                    <h1 className="font-poppins font-semibold text-text1 text-[18px] leading-[27px]">{errorHeading}</h1>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <h2 className="font-poppins font-normal text-text2 text-[14px] leading-[22px]">{errorMessage}</h2>
                </div>
            </div>
        </>
    );
}