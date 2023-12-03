import { useSelector } from "react-redux";
import FormationGround from "../components/FormationGround";
import TeamDetails from "../components/TeamDetails";

export default function Formation()
{
    
    return(
        <>
            <div>
                <div>
                    <TeamDetails title="Formation Overview"/>
                </div>
                <div>
                    <FormationGround/>
                </div>
            </div>
        </>
    );
}