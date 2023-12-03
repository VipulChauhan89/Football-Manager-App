import pen from "../assets/pen.svg";
import { useSelector, useDispatch } from "react-redux";
import { setEditable, setTextValue, setNameChanged, setHovering } from "../redux/teamName/teamNameSlice";


export default function TeamDetails(props:any) {
    const editable = useSelector((state:any) => state.teamName.editable);
    const textValue = useSelector((state:any) => state.teamName.textValue);
    const nameChanged = useSelector((state:any) => state.teamName.nameChanged);
    const hovering = useSelector((state:any) => state.teamName.hovering);
    const dispatch = useDispatch();

    const handleEdit = (value:boolean) => {
        dispatch(setEditable(value));
    };

    const handleChange = (e:any) => {
        dispatch(setTextValue(e.target.value));
        if (!nameChanged) {
            dispatch(setNameChanged(true));
        }
    };

    const calculateInputSize = (text:string) => {
        return Math.max(3, text.length);
    };

    const textSize = calculateInputSize(textValue)/1.8;

    const adjustSize = (input:any) => {
        const inputElement=input.target;
        const maxWidth=350;
        const factor=10.5;
    
        const calculatedWidth = (inputElement.value.length + 1) * factor;
        inputElement.style.width=(calculatedWidth > maxWidth)?`${maxWidth}px`:`${calculatedWidth}px`;
    };
    
    const inputStyle = {
        textOverflow: textValue.length > textSize ? 'ellipsis' : 'clip',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    };

    return (
        <div className="ml-[100px] mt-[40px]">
            <h1 className="text-primary1 font-poppins font-medium text-[12px] leading-[18px]">
                {props.title}
            </h1>
            <div className="flex gap-[10px] w-fit m-width-[370px]"
                onMouseEnter={() => dispatch(setHovering(true))} 
                onMouseLeave={() => dispatch(setHovering(false))}
            >
                <input className="bg-neutral1 w-auto text-text1 font-semibold font-poppins text-[18px] leading-[24px]" 
                    value={textValue} 
                    onChange={handleChange} 
                    readOnly={!editable} 
                    size={textSize} 
                    onInput={adjustSize} 
                    style={inputStyle} 
                    onBlur={() => handleEdit(false)}
                />
                {(!nameChanged || hovering) && (
                    <img className="hover:cursor-pointer block" 
                        src={pen} 
                        onClick={() => handleEdit(true)}
                    />
                )}
            </div>
        </div>
    );
}
