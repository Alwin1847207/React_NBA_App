import React from "react";
import TeamNfo from "../../elements/teamNfo";
import PostData from "../../elements/postData";

const Header_Article = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <div>
                <TeamNfo team={team}/>
            </div>
        ) : null;
    };

    const postData = (date,author) =>(
        <PostData data={{date,author}}/>
    );

    return (
        <div>
            {teamNfo(props.teamData)}
            {postData(props.date,props.author)}
        </div>
    )
};

export default Header_Article;