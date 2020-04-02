import React from "react";
import TeamNfo from "../../elements/teamNfo";

const Header_Video = (props) => {

    const teamNfo = (team) =>{
        return team ? (
            <TeamNfo team={team}/>
        ):null;
    };

    return(
        <div>
            {teamNfo(props.teamData)}
        </div>
    )
};

export default Header_Video;