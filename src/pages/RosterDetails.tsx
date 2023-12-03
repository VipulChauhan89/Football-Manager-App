import FindPlayer from "../components/FindPlayer";
import ImportTeam from "../components/ImportTeam";
import ImporterDialog from "../components/ImporterDialog";
import PlayerList from "../components/PlayerList";
import TeamDetails from "../components/TeamDetails";
import { useSelector } from "react-redux";

export default function RosterDetails()
{
    const isOpen = useSelector((state:any) => state.fileImporter.isOpen);

    return(
        <>
            <div>
                <TeamDetails title="Roster Details"/>
                <div className="flex gap-[10px] absolute top-[40px] left-[1040px]">
                    <FindPlayer/>
                    <ImportTeam/>
                </div>
                <div>
                    <PlayerList/>
                </div>
                {(isOpen) &&(
                    <ImporterDialog/>
                )}
            </div>
        </>
    );
}