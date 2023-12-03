import logo from "../assets/logo.svg";
import selectedBars from "../assets/selected-bars.svg";
import unselectedBars from "../assets/unselected-bars.svg";
import selectedUserLines from "../assets/selected-user-lines.svg";
import unselectedUserLines from "../assets/unselected-user-lines.svg";
import selecedElipse from "../assets/selected-elipse.svg";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../redux/navbar/navbarSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar()
{
    const selected = useSelector((state:any) => state.navbar.selected);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if(location.pathname==="/formation")
        {
            dispatch(setSelected("formationOverview"));
        }
        else
        {
            dispatch(setSelected("roasterDetail"));
        }
    },[location.pathname])

    const handleClick = (select:string) => {
        dispatch(setSelected(select));
    };

    return(
        <>
            <div>
                <div className="bg-[#111111] w-[60px] h-screen fixed top-0 left-0 pt-0 z-10">
                    <img className="mt-[18px] ml-[15px] "src={logo}></img>
                    <ul>
                        <li>
                            {selected==="roasterDetail"?
                                <div className="mt-[50px] ml-[10px] pl-[0px] pr=[5px] pt-[4px] pb-[4px] flex gap-2">
                                    <div className="mt-[4px]">
                                        <img src={selecedElipse}></img>
                                    </div>
                                    <img src={selectedBars}></img>
                                </div>
                                :
                                <Link to="/">
                                    <div className="mt-[50px] ml-[18px] pl-[4px] pr=[4px] pt-[4px] pb-[4px] hover:cursor-pointer" onClick={()=>handleClick("roasterDetail")}>
                                        <img src={unselectedBars}></img>
                                    </div>
                                </Link>
                            }
                        </li>
                        <li>
                            {selected==="formationOverview"?
                                <div className="mt-[30px] ml-[8px] pl-[0px] pr=[5px] pt-[5px] pb-[5px] flex gap-2">
                                    <div className="mt-[4px]">
                                        <img src={selecedElipse}></img>
                                    </div>
                                    <img src={selectedUserLines}></img>
                                </div>
                                :
                                <Link to="/formation">
                                    <div className="mt-[30px] ml-[18px] pl-[2px] pr=[3px] pt-[5px] pb-[5px] hover:cursor-pointer" onClick={()=>handleClick("formationOverview")}>
                                        <img src={unselectedUserLines}></img>
                                    </div>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}